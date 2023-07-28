// const express = require('express');
const express = require("express");
const { default: routes } = require("./app/routes");
const app = express();
const bodyParser = require("body-parser");
// const mysql = require("mysql2");
const cors = require("cors");
require('dotenv').config();


app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '2mb' }));


app.use(cors());

app.get("/", function (req, res) {
  res.send({ msg: "Hello World" });
  
});
routes.routes(app)
const PORT=process.env.PORTS
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
