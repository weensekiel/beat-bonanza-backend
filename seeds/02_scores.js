/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('scores').del()
  await knex('scores').insert([
    {
      id: 1, 
      user_id: 1,
      score: 511023
    }
  ]);
};
