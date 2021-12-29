const express = require("express");
const app = express();
const port = 3306;
const cors = require("cors");

const sequelize = require("../models/index").sequelize;

sequelize
  .sync()
  .then(() => console.log("connected database"))
  .catch((err) => console.error("occured error in database connecting", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("please hello world!");
});
app.post("/data", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title);
  console.log(content);
});
require("./router/index.js")(app);

app.listen(port, () => {
  console.log(`start! express server on port ${port}`);
});
