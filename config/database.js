const Sequelize = require("sequelize");

module.exports =  new Sequelize("piggybusiness", "root", "rootroot321*", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});