import z from "zod";

const querySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(50)
})

type queryType = z.infer<typeof querySchema>

export { querySchema, type queryType }
