import Sequelize, { Model } from 'sequelize';

class Bills extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        value: Sequelize.DECIMAL(10,2),
        value_corrected: Sequelize.DECIMAL(10,2),
        due_date: Sequelize.DATEONLY,
        payment_date: Sequelize.DATEONLY,
        days_late: Sequelize.INTEGER,
        fine: Sequelize.DECIMAL(10,2),
        interest: Sequelize.DECIMAL(10,2),
      },
      {
        sequelize,
      }
    );
  }
}

export default Bills;
