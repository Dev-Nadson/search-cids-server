import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("procedures", (table) => {
        table.increments("id").primary().notNullable();
        table.string("procedure_code", 10).notNullable().unique();
        table.string("procedure_name", 250).notNullable();
        table.string("complexity", 1).notNullable();
        table.string("gender", 1).notNullable();
        table.integer("max_execution").notNullable();
        table.integer("days_permanence").notNullable();
        table.integer("points").notNullable();
        table.integer("min_age").notNullable();
        table.integer("max_age").notNullable();
        table.decimal("vl_sh", 12, 2).notNullable();
        table.decimal("vl_sa", 12, 2).notNullable();
        table.decimal("vl_sp", 12, 2).notNullable();
        table.string("financing_code", 2).notNullable();
        table.string("rubric_code", 6).notNullable();
        table.integer("time_permanence").notNullable();
        table.string("competence_date", 6).notNullable();
        table.index("procedure_code");
        table.index("competence_date");
        table.index("complexity");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("procedures");
}