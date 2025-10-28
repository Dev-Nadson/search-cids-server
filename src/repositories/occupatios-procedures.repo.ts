import { Knex } from "../database/config.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_occupations_procedures_repository({ page, limit }: queryType) {
    const offset = (page - 1) * limit
    const data = await Knex("occupations_procedures").select().limit(limit).offset(offset)
    return data
}

export { list_occupations_procedures_repository }