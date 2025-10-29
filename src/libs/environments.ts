import { config } from 'dotenv';
import { z } from 'zod';

config()

const env_schema = z.object({
    PORT: z.coerce.number().default(4000),
    ORIGINS: z.string().transform((value) => value.split(',')),
});

const env = env_schema.safeParse(process.env);

export { env };