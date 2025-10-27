import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("cids_procedures", (table) => {
        table.increments("id").primary().notNullable();
        table.string("procedure_code", 10).references("procedure_code").inTable("procedures").onDelete("CASCADE").notNullable();
        table.string("cid_code", 4).references("cid_code").inTable("cids").onDelete("CASCADE").notNullable();
        table.string("is_principal", 1).notNullable();
        table.string("competence_date", 6).notNullable();
        table.unique(["procedure_code", "cid_code", "is_principal", "competence_date"]);
        table.index("procedure_code");
        table.index("cid_code");
        table.index("is_principal");
        table.index("competence_date");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("cids_procedures");
}