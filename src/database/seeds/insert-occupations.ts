import type { Knex } from "knex";
import ocupacao from "../../data/json/ocupacao.json" with {type: 'json'}

export async function seed(knex: Knex): Promise<void> {

    await knex("occupations").del();

    await knex.batchInsert("occupations", ocupacao, 500);
};
