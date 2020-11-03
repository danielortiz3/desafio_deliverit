module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bills', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      value_corrected: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: true,
      },
      due_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      payment_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      days_late: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      fine: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: true,
      },
      interest: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: true,
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
    await queryInterface.dropTable('bills');
  }
};
