import { z } from "zod"

export const userSchema = z.object({
    name: z.string().optional(),
    email: z.email(),
    password: z.string().min(1)
})
export type userInput = z.infer<typeof userSchema>

export const blogSchema = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean().optional(),
    authorId: z.string()
})

export type blogInput = z.infer<typeof blogSchema>

export const updateBlogSchema = blogSchema.pick({
    title: true,
    content: true
}).partial();