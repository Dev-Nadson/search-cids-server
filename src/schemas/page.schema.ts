import z from "zod";

const querySchema = z.object({
    page: z.coerce.number().positive().default(1),
    limit: z.coerce.number().positive().default(50),
    term: z.string().optional()
})

type queryType = z.infer<typeof querySchema>

type searchType = {
    code: string
    param: string
}

export { querySchema }
export type { queryType, searchType }
