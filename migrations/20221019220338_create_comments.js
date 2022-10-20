/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
    table.integer('post_id').notNullable().references('id').inTable('posts').onDelete('cascade');
    table.text('body', 'longtext');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function (knex) {
  return knex.schema.dropTable('comments');
};