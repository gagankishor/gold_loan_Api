const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.DATA_BASE_NAME,
  username: process.env.DATA_BASE_USER_NAME,
  password: process.env.DATA_BASE_PASSWORD,
  host: process.env.DATA_BASE_HOST,
  port: 4000, // Change this to your MySQL port if different
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

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "postman@1A",
//     database: "my_database",
//   });
//   console.log(connection)
//   const query = util.promisify(connection.query).bind(connection);
  // connection.connect((err) => {
  //   if (err) {
  //     console.error("Error connecting to database: ", err);
  //   } else {
  //     console.log("Database connection successful");
  //   }
  // });

  // exports.defult={
  //   connection,query
  // };