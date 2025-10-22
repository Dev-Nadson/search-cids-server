import { config } from 'dotenv';
import { z } from 'zod';

if (process.env.NODE_ENV === 'test') {
    config({ path: '.env.test' });
} else {
    config();
}

const env_schema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'staging', 'production']).default('production'),
    PORT: z.coerce.number().default(4000),
    ORIGINS: z.string().transform((value) => value.split(',')),
});

const _env = env_schema.safeParse(process.env);

if (_env.success === false) {
    console.error('Invalid environment variables!', _env.error.format());

    process.exit(1);
}

const env = _env.data;

export { env };