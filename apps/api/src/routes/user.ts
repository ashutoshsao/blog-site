import { Hono } from "hono";
import { getPrisma } from "../utils/prismaFunciton";
import { userSchema } from "@repo/types";
import { hashPassword, verifyPassword } from "../lib/passHash";
import { signAuthToken } from "../lib/auth";
import z from "zod";

type Env = {
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}

const user = new Hono<Env>();

user.post('/signup', async (c) => {
    const prisma = getPrisma(c.env)

    try {
        const { email, password, name }: z.infer<typeof userSchema> = await c.req.json();

        const { success } = userSchema.safeParse({ email, password, name });
        if (!success) {
            return c.json({ error: "invalid inputs" }, 400)
        }

        const existingUser = await prisma.user.findFirst({
            where: { email: email }
        })
        if (existingUser?.id) {
            return c.json({ error: "user already exists" }, 409);
        }

        // Hash the password before storing
        const hashedPassword = await hashPassword(password);

        // Placeholder: Create the user in the database
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash: hashedPassword, // Store the hashed password
                name: name || null,
            },
        });

        const payload = {
            userId: user.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24// Token expires in 24 hours
        }

        const token = await signAuthToken(payload, c.env.JWT_SECRET)

        return c.json({
            message: 'Signup successful',
            token: token
        }, 200);

    } catch (error) {
        console.error("Signup error:", error);
        // Handle potential errors like duplicate emails or invalid JSON body
        return c.json({ error: "Internal server error during signup." }, 500)
    }
})

user.post('/signin', async (c) => {
    const prisma = getPrisma(c.env)

    try {
        const { email, password }: z.infer<typeof userSchema> = await c.req.json();

        if (!email || !password) {
            return c.json({ error: "Missing email or password" }, 400);
        }

        // 1. Find the user by email
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            // Return generic error for security
            return c.json({ error: "Invalid credentials" }, 403);
        }

        // 2. Verify the provided password against the stored hash
        const isPasswordValid = await verifyPassword(password, user.passwordHash);

        if (!isPasswordValid) {
            // Return generic error for security
            return c.json({ error: "Invalid credentials" }, 403);
        }

        // 3. Password is valid! Proceed with session management

        const payload = {
            userId: user.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24// Token expires in 24 hours
        }

        const token = await signAuthToken(payload, c.env.JWT_SECRET)

        return c.json({
            message: 'Sign in successful',
            token: token
        }, 200);

    } catch (error) {
        console.error("Sign-in error:", error);
        return c.json({ error: "Internal server error during sign-in." }, 500)
    }
});

export default user