import z from "zod";

const querySchema = z.object({
    page: z.coerce.number().positive().default(1),
    limit: z.coerce.number().positive().default(50),
    term: z.string().optional()
})

type queryType = z.infer<typeof querySchema>

export { querySchema, type queryType }
