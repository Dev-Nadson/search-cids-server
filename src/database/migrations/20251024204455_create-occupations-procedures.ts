import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("occupations_procedures", (table) => {
        table.increments("id").primary().notNullable()
        table.string("procedure_code", 10).references("procedure_code").inTable("procedures").notNullable()
        table.string("occupation_code", 6).references("occupation_code").inTable("occupations").notNullable()
        table.string("competence_date", 6).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("occupations_procedures")
}

