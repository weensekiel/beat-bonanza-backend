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
      score: 511020
    },
    {
      id: 2, 
      user_id: 1,
      score: 494580
    },
    {
      id: 3, 
      user_id: 1,
      score: 456800
    }
  ]);
};
