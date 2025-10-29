import type { Knex } from "knex";
import cids from "./data/json/cid.json" with {type: 'json'}

export async function seed(knex: Knex): Promise<void> {

    await knex("cids").del();

    await knex.batchInsert("cids", cids, 500);
};
