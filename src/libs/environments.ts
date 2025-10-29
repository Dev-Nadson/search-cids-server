import "dotenv/config"
import z from "zod"

const env_schema = z.object({
    PORT: z.coerce.number().positive().default(3333),
    HOST: z.string().min(1).default('0.0.0.0'),
    ORIGINS: z.string().transform((value) => value.split(',')),
})

const env = env_schema.parse(process.env)

export { env }