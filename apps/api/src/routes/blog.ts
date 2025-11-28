import { Hono } from "hono";
import { authMiddleware } from "../lib/authMiddleware";
import { getPrisma } from "../utils/prismaFunciton";
import { blogSchema, updateBlogSchema } from "../lib/schema";

type Env = {
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
    Variables: {
        userId: string
    }
}

const blog = new Hono<Env>();

blog.use(authMiddleware)

blog.post('/', async (c) => {
    try {
        const prisma = getPrisma(c.env);
        const body = await c.req.json();
        const extendedBody = { ...body, authorId: c.get("userId") }
        const { success } = blogSchema.safeParse(extendedBody);

        if (!success) {
            return c.json({ error: "invalid inputs" }, 400)
        }

        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get("userId")
            }
        })

        return c.json({
            message: "blog Uploaded",
            id: blog.id
        }, 200)
    }
    catch (error) {
        console.error("error while blog creation:", error);
        return c.json({ error: "Internal server error during creating blog." }, 500)
    }
})

blog.put('/:id', async (c) => {
    try {
        const prisma = getPrisma(c.env);
        const body = await c.req.json();
        const { success } = updateBlogSchema.safeParse(body);

        if (!success) {
            return c.json({ error: "invalid inputs" }, 400)
        }
        const id = c.req.param("id")
        const updatedBlog = await prisma.blog.update({
            where: {
                id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })

        if (!updatedBlog) {
            return c.json({ error: "No blog found to update!" }, 400)
        }

        return c.json({
            messgae: "blog updated!",
            id: updatedBlog.id
        }, 200)
    }
    catch (error) {
        console.error("error while blog updation:", error);
        return c.json({ error: "Internal server error during updating blog." }, 500)
    }
})

blog.get('/bulk', async (c) => {
    try {
        const prisma = getPrisma(c.env);
        const blogs = await prisma.blog.findMany({})
        return c.json(blogs, 200)
    }
    catch (error) {
        console.error("error while fetching blogs:", error);
        return c.json({ error: "Internal server error during fetching blogs" }, 500)
    }
})

blog.get('/:id', async (c) => {
    try {
        const prisma = getPrisma(c.env);
        const id = c.req.param("id")
        const blog = await prisma.blog.findFirst({
            where: {
                id
            }
        })

        if (!blog) {
            return c.json({ error: "No blog found!" }, 400)
        }

        return c.json(blog, 200)
    }
    catch (error) {
        console.error("error while fetching blog:", error);
        return c.json({ error: "Internal server error during fetching blog." }, 500)
    }
})

export default blog