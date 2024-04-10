/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function up(knex) {
  return knex.schema.createTable("scores", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().references("users.id");
    table.integer("score");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function down(knex) {
  return knex.schema.dropTable("scores");
};

export { up, down };