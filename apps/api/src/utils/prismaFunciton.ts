import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

// Define the type for your environment variables
interface Env {
    DATABASE_URL: string
}

// 1. Remove 'async' (not needed for initialization)
// 2. Change parameter to 'env' (standard variable name)
export const getPrisma = (env: Env) => {
    const prisma = new PrismaClient({
        datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate())

    return prisma
}