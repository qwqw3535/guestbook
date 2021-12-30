const express = require("express");
const app = express();
const port = 3306;
const cors = require("cors");
const sequelize = require("../models/index").sequelize;
const options = {
  origin: "http://localhost:3000", // 접근 권한을 부여하는 도메인
  credentials: true,
  optionsSuccessStatus: 200,
};

sequelize
  .sync()
  .then(() => console.log("connected database"))
  .catch((err) => console.error("occured error in database connecting", err));

app.use(cors(options));
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
