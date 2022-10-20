/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments(); //id field postgresql automatically takes care of id
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
    table.string('title');
    table.text('body', 'longtext');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
