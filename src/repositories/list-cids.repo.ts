import { pagination } from "../libs/pagination.js";
import type { queryType } from "../schemas/page.schema.js";

async function list_cids_repository(pages: queryType) {
    const data = await pagination("cids", pages, "cid_code", ["id", "cid_code", "description", "injury_type", "gender", "stage"])
    return data
}

export { list_cids_repository }