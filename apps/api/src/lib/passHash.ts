import { hash, compare } from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
    return await hash(password, 10);
};

export const verifyPassword = async (rawPassword: string, storedHash: string): Promise<boolean> => {
    return await compare(rawPassword, storedHash);
};