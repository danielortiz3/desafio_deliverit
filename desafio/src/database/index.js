import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Bills from '../app/models/Bills';
import Calculations from '../app/models/Calculations';

const models = [Bills, Calculations];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
