import { createMiddleware } from "hono/factory";
import { verifyAuthToken } from "./auth";

export const authMiddleware = createMiddleware(async (c, next) => {
    const authHeader = c.req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return c.json({ error: "Missing or invalid Authorization header" }, 401);
    }

    const token = authHeader.split(" ")[1]
    const JWT_SECRET = c.env.JWT_SECRET
    if (!JWT_SECRET) {
        console.error("JWT_SECRET is missing");
        return c.json({ error: "Internal server error" }, 500);
    }

    const payload = await verifyAuthToken(token, JWT_SECRET);
    if (!payload) {
        return c.json({ error: "Invalid or expired token" }, 401);
    }
    c.set("userId", payload?.userId);
    console.log("auth passed", c.get("userId"))
    await next();
});
