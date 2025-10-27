import type { Knex } from "knex";
import procedimento_cid from "../../data/json/procedimento_cid.json" with {type: 'json'}

export async function seed(knex: Knex): Promise<void> {

    await knex("cids_procedures").del();

    await knex.batchInsert("cids_procedures", procedimento_cid as any, 500);
};