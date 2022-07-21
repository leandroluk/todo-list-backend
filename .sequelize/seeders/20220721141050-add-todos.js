const { faker } = require('@faker-js/faker')

const created_at = new Date()

const todos = Array(Math.floor(Math.random() * 10 + 1))
  .fill()
  .map((_, index) => ({
    id: index + 1,
    created_at,
    description: faker.lorem.sentence(),
    isDone: Math.round(Math.random())
  }))

module.exports = {
  /** @param {import('sequelize').QueryInterface} queryInterface */
  async up(queryInterface) {
    await queryInterface.bulkInsert('todos', todos, {});
  },

  /** @param {import('sequelize').QueryInterface} queryInterface */
  async down(queryInterface) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};
