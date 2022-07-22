const { faker } = require('@faker-js/faker')

module.exports = {
  /** @param {import('sequelize').QueryInterface} queryInterface */
  async up(queryInterface) {
    await queryInterface.bulkInsert('todos', Array(10).fill().map((_, i) => ({
      id: i + 1,
      created_at: new Date(),
      description: faker.lorem.sentence(),
      is_done: Math.round(Math.random())
    })), {});
  },

  /** @param {import('sequelize').QueryInterface} queryInterface */
  async down(queryInterface) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};
