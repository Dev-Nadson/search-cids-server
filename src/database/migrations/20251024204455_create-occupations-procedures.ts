import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("occupations_procedures", (table) => {
        table.increments("id").primary().notNullable();
        table.string("procedure_code", 10).notNullable().references("procedure_code").inTable("procedures").onDelete("CASCADE");
        table.string("occupation_code", 6).notNullable().references("occupation_code").inTable("occupations").onDelete("CASCADE");
        table.string("competence_date", 6).notNullable();
        table.unique(["procedure_code", "occupation_code", "competence_date"]);
        table.index("procedure_code");
        table.index("occupation_code");
        table.index("competence_date");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("occupations_procedures");
}