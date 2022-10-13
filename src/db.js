const { Sequelize, Op } = require("sequelize");
const modelEmpresa = require("./Models/Empresa.js");

const sequelize = new Sequelize(
  "postgresql://2510:3j25VKyxJUjNVM57In1UVQ@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddroopy-penguin-5575",
  {
    //logging: (...msg) => console.log(msg),
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

modelEmpresa(sequelize);

const { empresa } = sequelize.models;

module.exports = {
  ...sequelize.models,
  db: sequelize,
  Op,
};
