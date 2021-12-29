const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "..", "config", "config.json"))[
  env
];

const database = {};
const sequelize = new Sequelize(config.db, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

database.data = require("./model")(sequelize, Sequelize);
module.exports = database;
