import type { Knex } from "knex";
import procedimento_ocupacao from "../../data/json/procedimento_ocupacao.json" with {type: 'json'}

export async function seed(knex: Knex): Promise<void> {

    await knex("occupations_procedures").del();

    await knex.batchInsert("occupations_procedures", procedimento_ocupacao as any, 500);
};
