/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      username: 'John Doe', 
      email: 'johndoe@example.com'
    },
    {
      username: 'Jane Doe', 
      email: 'janedoe@example.com'
    }
  ]);
};

