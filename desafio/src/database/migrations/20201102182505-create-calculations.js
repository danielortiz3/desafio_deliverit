module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('calculations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      param_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      param_value: {
        type: Sequelize.DECIMAL(10,3),
        allowNull: false,
      },
      param_percent: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('calculations');
  }
};
