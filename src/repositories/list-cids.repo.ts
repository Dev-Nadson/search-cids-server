import { pagination } from "../libs/pagination.js";
import type { queryType, searchType } from "../schemas/page.schema.js";

async function list_cids_repository(pages: queryType) {
    const searchParams: searchType = {
        code: "cid_code",
        name: "description"
    }

    const data = await pagination("cids", pages, searchParams, ["id", "cid_code", "description", "injury_type", "gender", "stage"])
    return data
}

export { list_cids_repository }