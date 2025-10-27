import { Knex } from "../database/config.js";

async function list_procedures_repository() {
    const data = await Knex("procedures").select()
    return data
}

export { list_procedures_repository }