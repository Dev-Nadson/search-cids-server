import { Knex } from "../database/config.js";

async function list_cids_procedures_repository() {
    const data = await Knex("cids_procedures").select()
    return data
}

export { list_cids_procedures_repository }