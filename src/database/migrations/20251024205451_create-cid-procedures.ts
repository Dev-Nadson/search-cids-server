import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("cids_procedures", (table) => {
        table.increments("id").primary().notNullable()
        table.string("procedure_code").references("procedure_code").inTable("procedures").notNullable()
        table.string("cid_code").references("cid_code").inTable("cids").notNullable()
        table.string("competence_date", 6).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("cids_procedures")
}

