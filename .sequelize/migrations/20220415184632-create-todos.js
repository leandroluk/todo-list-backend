module.exports = {
  /** @param {import('sequelize').QueryInterface} */
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('todos', {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      createdAt: {
        type: DataTypes.DATE(3),
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        allowNull: true,
        field: 'updated_at'
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isDone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'is_done'
      },
    });
  },

  /** @param {import('sequelize').QueryInterface} */
  async down(queryInterface) {
    await queryInterface.dropTable('todos');
  }
};
