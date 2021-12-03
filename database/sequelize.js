const {Sequelize, DataTypes} = require('sequelize');
const models = require('./models/model_data.js');
const config = require('../config.js')

const sequelize = new Sequelize(config.db_name, config.user, config.password, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false,
    freezeTableName: true,
  },
  logging: false
});

const Model = models(sequelize, Sequelize);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();

module.exports = {
  Model
}