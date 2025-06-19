
// Criação da Tabela 
const db = require("../db");

const Post = db.sequelize.define(
  "produtos",
  {
    nome: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: db.Sequelize.FLOAT,
      allowNull: false,
    },
    categoria: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);


// Post.sync({ force: true });

module.exports = Post;
