const mysql = require("mysql");
const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "..", "config", "config.json"))[
  env
];

const conn = mysql.createConnection(config.json);
