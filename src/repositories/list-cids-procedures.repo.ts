import { pagination } from "../libs/pagination.js";
import type { queryType, searchType } from "../schemas/page.schema.js";

async function list_cids_procedures_repository(pages: queryType) {
    const searchParams: searchType = {
        code: "procedure_code",
        param: "cid_code"
    }

    const data = await pagination("cids_procedures", pages, searchParams)
    return data
}

export { list_cids_procedures_repository }