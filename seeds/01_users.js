/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      email: 'weu@gmail.com',
      username: "coolguyezekiel",
      password: "qwe123"
    }
  ]);
};
