import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("cids", (table) => {
        table.increments("id").primary().notNullable();
        table.string("cid_code", 4).notNullable().unique();
        table.string("description", 100).notNullable();
        table.string("injury_type", 1);
        table.string("gender", 1);
        table.string("stage", 1);
        table.integer("irradiated_fields");
        table.index("cid_code");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("cids");
}