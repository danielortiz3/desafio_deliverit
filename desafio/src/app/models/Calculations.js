import Sequelize, { Model } from 'sequelize';

class Calculations extends Model {
  static init(sequelize) {
    super.init(
      {
        param_description: Sequelize.STRING,
        param_value: Sequelize.DECIMAL(10,3),
        param_percent: Sequelize.DECIMAL(10,2),
      },
      {
        sequelize,
      }
    );
  }
}

export default Calculations;
