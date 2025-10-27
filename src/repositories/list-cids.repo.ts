import { Knex } from "../database/config.js";

async function list_cids_repository() {
    const data = await Knex("cids").select("id", "cid_code", "description", "injury_type", "gender", "stage")
    return data
}

export { list_cids_repository }