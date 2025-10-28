import { Knex } from "../database/config.js";
import { BadRequestError } from "../libs/errors/app.errors.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_cids_procedures_repository({ page, limit }: queryType) {
    const offset = (page - 1) * limit
    const t = await Knex("cids_procedures").count("* as total").first()
    const total = Number(t?.total ?? 0)

    const total_pages = Math.ceil(total / limit)

    const data = await Knex("cids_procedures").select().limit(limit).offset(offset)

    return {
        pagination: { page, limit, total, total_pages },
        data: data
    }
}

export { list_cids_procedures_repository }