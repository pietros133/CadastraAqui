const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     // nome do banco
  process.env.DB_USER,     // usuário
  process.env.DB_PASS,     // senha
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro ao se conectar: " + erro);
  });

module.exports = sequelize;
