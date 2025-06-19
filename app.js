// Requisição dos Modulos
const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
const { where } = require("sequelize");

const app = express();

// Configurações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public")); 

// Handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");


// Rotas

app.get("/", (req, res) => {
  Post.findAll({ raw: true })
    .then((posts) => {
      posts = posts.map(post => ({
        ...post,
        preco: post.preco.toFixed(2)
      }));
      res.render("home", { posts });
    })
    .catch((erro) => {
      res.send("Erro ao carregar produtos: " + erro);
    });
});

// Cadastro
app.get("/cad", (req, res) => {
  res.render("formulario");
});

app.post("/add", (req, res) => {
  Post.create({
    nome: req.body.nome,
    preco: req.body.preco,
    categoria: req.body.categoria,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Erro ao cadastrar produto: " + erro);
    });
});

// Deletar produtos

app.get("/deletar/:id", function (req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Erro ao deletar: " + erro);
    });
});


// Iniciar aplicação
app.listen(8081, () => {
  console.log("Servidor rodando em http://localhost:8081");
});
