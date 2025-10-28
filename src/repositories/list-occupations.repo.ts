import { Knex } from "../database/config.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_occupations_repository({ page, limit }: queryType) {
    const offset = (page - 1) * limit

    const data = await Knex("occupations").select().limit(limit).offset(offset)
    const t = await Knex("occupations").count("* as total").first()
    const total = Number(t?.total ?? 0)
    const total_pages = Math.ceil(total / limit)

    return {
        pagination: {
            page,
            limit,
            total,
            total_pages
        },
        data: data
    }
}

export { list_occupations_repository }