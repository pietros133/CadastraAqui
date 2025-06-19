# CadastraAqui

---

## 🛒 Cadastro de Produtos - Node.js + Express + MySQL

Projeto simples para cadastro, listagem e exclusão de produtos utilizando:

- Node.js  
- Express.js  
- Sequelize (ORM)  
- Express-Handlebars  
- MySQL  
- HTML + CSS  

> ⚠️ **Observação:** O projeto não possui edição de produtos (CRUD parcial: Create, Read, Delete).

---

## ✨ Funcionalidades

- ✅ Cadastrar novos produtos  
- 📋 Listar produtos cadastrados  
- ❌ Deletar produtos existentes  

---

## 📸 Prévia da Interface

- Lista de produtos com nome, preço e categoria  
- Botão para cadastro de novo produto  
- Botão para exclusão de produtos  

---

## 🛠️ Tecnologias Utilizadas

- Node.js  
- Express.js  
- MySQL  
- Sequelize  
- Express-Handlebars  
- HTML5 + CSS3  

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


2. Instale as dependências

npm install

3. Configure o banco de dados

    Crie o banco de dados no MySQL (exemplo: cadastro_produtos):

CREATE DATABASE cadastro_produtos;

    Crie a tabela produtos:

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10,2),
  categoria VARCHAR(50),
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);


4. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto com suas credenciais:

DB_NAME=cadastro_produtos
DB_USER=root
DB_PASS=sua_senha
DB_HOST=localhost

5. Execute o projeto

node app.js
# ou, se preferir com reload automático
nodemon app.js


📁 Estrutura do projeto

.
├── models/                  # Modelos Sequelize (ex: Produto.js)
├── views/
│   ├── layouts/             # Layout padrão (main.handlebars)
│   ├── home.handlebars      # Página de listagem de produtos
│   └── formulario.handlebars# Página de cadastro de produtos
├── public/
│   ├── css/                 # Estilos CSS
│   │   ├── home.css
│   │   └── formulario.css
├── app.js                   # Arquivo principal do servidor
├── db.js                    # Conexão com banco de dados
├── package.json
├── .env.example             # Exemplo de variáveis de ambiente
└── .env                     # Configurações locais (não versionar)
