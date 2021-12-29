module.exports = (app) => {
  const data = require("../../controllers/controller.js");
  var router = require("express").Router();
  router.post("/", data.create);
  router.get("/", data.findAll);
  console.log("router reached");
  app.use("/lists", router);
};
