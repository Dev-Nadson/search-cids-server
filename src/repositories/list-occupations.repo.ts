import { pagination } from "../libs/pagination.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_occupations_repository(pages: queryType) {
    const data = await pagination("occupations", pages)
    return data
}

export { list_occupations_repository }