import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("procedures", (table) => {
        table.increments("id").primary().notNullable()
        table.string("procedure_code", 10).notNullable()
        table.string("procedure_name").notNullable()
        table.string("complexity", 1).notNullable()
        table.string("gender", 1).notNullable()
        table.integer("min_age").notNullable()
        table.integer("max_age").notNullable()
        table.decimal("vl_sh", 10, 2).notNullable()
        table.decimal("vl_sa", 10, 2).notNullable()
        table.decimal("vl_sp", 10, 2).notNullable()
        table.string("competence_date", 6).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("procedures")
}

