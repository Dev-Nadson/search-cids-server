import { pagination } from "../libs/pagination.js";
import type { queryType, searchType } from "../schemas/page.schema.js";

async function list_occupations_procedures_repository(pages: queryType) {
    const searchParams: searchType = {
        code: "procedure_code",
        param: "occupation_code"
    }

    const data = await pagination("occupations_procedures", pages, searchParams)
    return data
}

export { list_occupations_procedures_repository }