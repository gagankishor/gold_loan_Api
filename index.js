// const express = require('express');
const express = require("express");
const { default: routes } = require("./app/routes");
const app = express();
const bodyParser = require("body-parser");
// const mysql = require("mysql2");
const cors = require("cors");
require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(
  cors({
    origin: process.env.DOMAIN,
  })
);
app.get("/", function (req, res) {
  res.send({ msg: "Hello World" });
  
});
routes.routes(app)
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// const multer = require("multer");
// const upload = multer({ dest: "api/kycupdate/" });

// app.get("/register", (req, res) => {
//   // const sql = ;

//   db.query("SELECT * from users", (err, result) => {
//     if (err) {
//       console.log("Error retrieving data from MySQL:", err);
//       res.status(500).send("Error retrieving data from MySQL");
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.post("/api/login", (req, res) => {
//   const { name, password } = req.body;
//   const sql = "SELECT * FROM user WHERE name = ? AND password = ?";
//   db.query(sql, [name, password], (err, results) => {
//     if (err) {
//       console.error("Error executing MySQL query:", err);
//       res.status(500).json({ error: "Internal server error" });
//     } else if (results.length === 0) {
//       res.status(401).json({ error: "Invalid username or password" });
//     } else {
//       res.status(200).json({ message: "Login successful" });
//     }
//   });
// });
// app.post("/register", (req, res) => {
//   const { name, email, password } = req.body;

//   // Validate input fields
//   if (!name || !email || !password) {
//     return res
//       .status(400)
//       .json({ message: "Please provide all required fields" });
//   }

//   // Save user to database
//   const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
//   const values = [name, email, password];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error("Error saving user to database: ", err);
//       return res.status(500).json({ message: "Internal server error" });
//     }
//     result = sql;
//     return res.status(200).json({ message: "Registration successful" });
//   });
// });





