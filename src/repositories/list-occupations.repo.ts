import { pagination } from "../libs/pagination.js";
import type { queryType, searchType } from "../schemas/page.schema.js";

async function list_occupations_repository(pages: queryType) {
    const searchParams: searchType = {
        code: "occupation_code",
        param: "name"
    }

    const data = await pagination("occupations", pages, searchParams)
    return data
}

export { list_occupations_repository }