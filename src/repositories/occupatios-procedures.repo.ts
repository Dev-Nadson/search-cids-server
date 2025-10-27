import { Knex } from "../database/config.js";

async function list_occupations_procedures_repository() {
    const data = await Knex("occupations_procedures").select()
    return data
}

export { list_occupations_procedures_repository }