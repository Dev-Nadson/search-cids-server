import { Knex } from "../database/config.js";

async function list_occupations_repository() {
    const data = await Knex("occupations").select()
    return data
}

export { list_occupations_repository }