import { Knex } from "../database/config.js";
import type { queryType, searchType } from "../schemas/page.schema.js";

async function pagination(table_name: string, pages: queryType, search_params?: searchType, select_properties?: string[]) {
    const { page, limit, term } = pages
    const offset = (page - 1) * limit

    let countQuery = Knex(table_name)
    let dataQuery = Knex(table_name)

    if (term && search_params) {
        const { name, code } = search_params
        countQuery = countQuery.where(name, "LIKE", `%${term}%`).orWhere(code, "LIKE", `${term}`),
            dataQuery = dataQuery.where(name, "LIKE", `%${term}%`).orWhere(code, "LIKE", `${term}`)
    }

    const [count, data] = await Promise.all([
        countQuery.count("* as total").first(),
        dataQuery.select(select_properties || "*").limit(limit).offset(offset)
    ])

    const total = Number(count?.total ?? 0)
    const total_pages = Math.ceil(total / limit)


    return {
        pagination: { page, limit, total, total_pages },
        data: data
    }
}

export { pagination }