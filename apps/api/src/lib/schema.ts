import z from "zod"

export const userSchema = z.object({
    email: z.email(),
    name: z.string().optional(),
    password: z.string().min(1)
})

export const blogSchema = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean().optional(),
    authorId: z.string()
})

export const updateBlogSchema = blogSchema.pick({
    title: true,
    content: true
}).partial();