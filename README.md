# CadastraAqui

# 🛒 Cadastro de Produtos - Node.js + Express + MySQL

Este é um projeto simples de CRUD parcial (Create, Read, Delete) de produtos utilizando:

- Node.js
- Express.js
- Sequelize (ORM)
- Express-Handlebars
- MySQL
- HTML + CSS

> ⚠️ O projeto atualmente **não possui edição de produtos**. Apenas cadastro, listagem e exclusão.

---

## ✨ Funcionalidades

- ✅ Cadastrar novos produtos
- 📋 Listar produtos cadastrados
- ❌ Deletar produtos existentes

---

## 📸 Prévia da interface

- Lista de produtos com nome, preço e categoria
- Botão para cadastro de novo produto
- Botão para deletar produtos

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- HTML5 + CSS3

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


### 2. Instale as Dependencias
npm install

### 3. Configure o Banco de Dados

. Crie um banco de dados no MySQL (exemplo: cadastro_produtos)
. Crie a Tabela:
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10,2),
  categoria VARCHAR(50),
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);
### 3.1 Configure suas credenciais criando um arquivo .env na raiz do projeto com base no exemplo abaixo:

DB_NAME=cadastro_produtos
DB_USER=root
DB_PASS=sua_senha
DB_HOST=localhost

### 4. Execute o Projeto

node app.js ou nodemon app.js

5. Estrutura das Pastas

.
├── models/                 # Modelos Sequelize (Post.js)
├── views/
│   ├── layouts/            # Layout padrão (main.handlebars)
│   ├── home.handlebars     # Página de listagem de produtos
│   └── formulario.handlebars # Página de cadastro de produtos
├── public/
│   ├── css/                # Estilos CSS
│   │   ├── home.css
│   │   └── formulario.css
├── app.js                  # Arquivo principal do servidor
├── db.js                   # Conexão com o banco de dados
├── package.json
├── .env.example            # Exemplo de variáveis de ambiente

