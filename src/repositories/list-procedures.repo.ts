import { pagination } from "../libs/pagination.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_procedures_repository(pages: queryType) {
    const data = await pagination("procedures", pages)
    return data
}

export { list_procedures_repository }