import type { Knex } from "knex";
import procedimento from "./data/json/procedimento.json" with {type: 'json'}

export async function seed(knex: Knex): Promise<void> {
    await knex("procedures").del();

    await knex.batchInsert("procedures", procedimento, 500)
};
