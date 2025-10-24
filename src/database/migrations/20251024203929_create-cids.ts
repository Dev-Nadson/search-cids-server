import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("cids", (table) => {
        table.increments("id").primary().notNullable()
        table.string("cid_code", 4).notNullable()
        table.string("description").notNullable()
        table.string("competence_date", 6).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("cids")
}

