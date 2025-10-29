import { pagination } from "../libs/pagination.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_cids_procedures_repository(pages: queryType) {
    const data = await pagination("cids_procedures", pages)
    return data
}

export { list_cids_procedures_repository }