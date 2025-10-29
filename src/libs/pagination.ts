import { Knex } from "../database/config.js";
import type { queryType } from "../schemas/page.schema.js";

async function pagination(table_name: string, pages: queryType, identifier?: string, select_properties?: string[]) {
    const { page, limit, term } = pages
    const offset = (page - 1) * limit

    let count, data

    if (term) {
        [count, data] = await Promise.all([
            Knex(table_name).count("* as total").where(identifier || "", "LIKE", `%${term}%`).first(),
            Knex(table_name).select(select_properties || "").limit(limit).offset(offset).where(identifier || "", "LIKE", `%${term}%`)
        ])
    } else {
        [count, data] = await Promise.all([
            Knex(table_name).count("* as total").first(),
            Knex(table_name).select(select_properties || "").limit(limit).offset(offset)
        ])
    }

    const total = Number(count?.total ?? 0)
    const total_pages = Math.ceil(total / limit)


    return {
        pagination: { page, limit, total, total_pages },
        data: data
    }
}

export { pagination }