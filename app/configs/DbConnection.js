// const mysql = require("mysql");
// const util = require("util");

const mysql = require("mysql2");
const util = require("util");

require('dotenv').config();
const connection = mysql.createConnection({
  host: process.env.DATA_BASE_HOST,
  user: process.env.DATA_BASE_USER_NAME,
  password: process.env.DATA_BASE_PASSWORD,
  database: process.env.DATA_BASE_NAME,
});

const query = util.promisify(connection.query).bind(connection);
  // console.log(connection)

  connection.connect((err) => {
      if (err) {
        console.error("Error connecting to database: ", err);
      } else {
        console.log("Database connection successful");
      }
    });
  

exports.default = { connection, query };




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