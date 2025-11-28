import { Hono } from 'hono'
import userRoutes from './routes/user'
import blogRoutes from './routes/blog'
// Define the environment bindings and variables for Hono context



export const app = new Hono()

app.route('/api/v1/user', userRoutes)
app.route('/api/v1/blog', blogRoutes)


export default app
