export const arrayBufferToHex = (buffer: ArrayBuffer): string => {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
};

export const hashPassword = async (password: string): Promise<string> => {
    // 1. Convert the string into a Uint8Array (required for digest)
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    // 2. Compute the hash digest
    const digest = await crypto.subtle.digest(
        { name: 'SHA-256' },
        data
    );

    // 3. Convert the digest ArrayBuffer to a hex string
    return arrayBufferToHex(digest);
};

export const verifyPassword = async (rawPassword: string, storedHash: string): Promise<boolean> => {
    // Re-hash the raw password using the same method
    const newHash = await hashPassword(rawPassword);

    // Compare the newly generated hash with the stored hash
    // Using a simple string comparison is fine for SHA-256 digests.
    return newHash === storedHash;
};