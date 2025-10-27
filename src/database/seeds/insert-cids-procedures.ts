import type { Knex } from "knex";
import fs from "fs"
import path from "path"

interface procedures {

}

export async function seed(knex: Knex): Promise<void> {
    await knex("cids_procedures").del();

    const data = 10

    await knex("cids_procedures").insert([]);
};
