import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("occupations", (table) => {
        table.increments("id").primary().notNullable()
        table.string("occupation_code", 6).notNullable()
        table.string("name").notNullable()
        table.string("competence_date", 6).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("occupations")
}

