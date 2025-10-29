import { pagination } from "../libs/pagination.js";
import type { queryType, searchType } from "../schemas/page.schema.js";

async function list_procedures_repository(pages: queryType) {
    const searchParams: searchType = {
        code: "procedure_code",
        name: "procedure_name"
    }

    const data = await pagination("procedures", pages, searchParams)
    return data
}

export { list_procedures_repository }