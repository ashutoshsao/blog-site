import { Hono } from 'hono'
import userRoutes from './routes/user'
import blogRoutes from './routes/blog'
// Define the environment bindings and variables for Hono context
import { cors } from 'hono/cors'

type Env = {
    Bindings: {
        FRONTEND_LOCAL: string
        FRONTEND_PROD: string
    }
}
export const app = new Hono<Env>()
app.use('/api/*', cors({
    origin: (origin, c) => {
        const allowed = [
            c.env.FRONTEND_LOCAL,
            c.env.FRONTEND_PROD
        ];

        if (!origin) return ""; // ignore server-to-server requests

        if (allowed.includes(origin)) {
            return origin;
        }

        return null;
    },
}));

app.get('/debug-env', (c) => {
    return c.json({
        local: c.env.FRONTEND_LOCAL,
        prod: c.env.FRONTEND_PROD
    });
});


app.route('/api/v1/user', userRoutes)
app.route('/api/v1/blog', blogRoutes)


export default app
