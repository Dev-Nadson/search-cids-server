import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("occupations", (table) => {
        table.increments("id").primary().notNullable();
        table.string("occupation_code", 6).notNullable().unique();
        table.string("name", 150).notNullable();
        table.index("occupation_code");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("occupations");
}