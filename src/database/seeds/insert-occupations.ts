import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("occupations").del();

    // Inserts seed entries
    await knex("occupations").insert([
        { "occupation_code": "010105", "name": "Oficial General da Aeronáutica" },
        { "occupation_code": "010104", "name": "Oficial General da Aeronáutica" },
        { "occupation_code": "010103", "name": "Oficial General da Aeronáutica" },
        { "occupation_code": "010102", "name": "Oficial General da Aeronáutica" },
    ]);
};
