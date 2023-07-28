const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.DATA_BASE_NAME,
  username: process.env.DATA_BASE_USER_NAME,
  password: process.env.DATA_BASE_PASSWORD,
  host: process.env.DATA_BASE_HOST,
  port: 4000,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    }
  },
});

module.exports = sequelize;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful');

    // You can synchronize the models with the database (creates the table if it doesn't exist)
    // await sequelize.sync();
    // console.log('Models synchronized with the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
})();
