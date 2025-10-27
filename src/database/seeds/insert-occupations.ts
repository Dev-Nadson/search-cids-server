import type { Knex } from "knex";
import * as fs from "fs"

interface IOccupation {
    CO_OCUPACAO: string,
    NO_OCUPACAO: string
}

const json_path = "src/data/json/ocupacao.json"

export async function seed(knex: Knex): Promise<void> {

    const data = await fs.promises.readFile(json_path, { encoding: 'latin1' });
    const occupations: IOccupation[] = JSON.parse(data)

    await knex("occupations").del();

    await knex.batchInsert("occupations", occupations, 1000)
};
