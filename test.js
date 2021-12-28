const express = require("express");
const app = express();
const path = require("path");
const port = 3306;
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
/*
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "new_database",
});
connection.connect();
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("please hello world!");
});
app.post("/data", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title);
  console.log(content);
});

// 3000 포트로 서버 오픈
app.listen(port, () => {
  console.log(`start! express server on port ${port}`);
});
