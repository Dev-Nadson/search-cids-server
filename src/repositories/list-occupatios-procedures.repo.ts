import { pagination } from "../libs/pagination.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_occupations_procedures_repository(pages: queryType) {
    const data = await pagination("occupations-procedures", pages)
    return data
}

export { list_occupations_procedures_repository }