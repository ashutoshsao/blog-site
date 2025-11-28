import { sign, verify } from 'hono/jwt'

export async function signAuthToken(payload: Record<string, any>, JWT_SECRET: string): Promise<string> {


    const token = await sign(
        payload,
        JWT_SECRET,
        'HS256'
    );
    return token;
}

export async function verifyAuthToken(token: string, JWT_SECRET: string) {
    try {
        const payload = await verify(token, JWT_SECRET, 'HS256');
        return payload;
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return null;
    }
}