import { Knex } from "../database/config.js";
import { BadRequestError } from "../libs/errors/app.errors.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_procedures_repository({ page, limit }: queryType) {
    const offset = (page - 1) * limit
    const t = await Knex("procedures").count("* as total").first()
    const total = Number(t?.total ?? 0)

    const total_pages = Math.ceil(total / limit)

    if (page > total_pages) {
        throw new BadRequestError("Número de página inválido")
    }

    const data = await Knex("procedures").select().limit(limit).offset(offset)

    return {
        pagination: { page, limit, total, total_pages },
        data: data
    }
}

export { list_procedures_repository }