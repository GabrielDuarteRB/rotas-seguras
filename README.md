# 📦 Projeto Rotas Seguras

Projeto desenvolvido em Nest Js com banco de dados em Postgres como parte da disciplina de desenvolvimento web no CEFET-RJ 

---

## 📚 Descricao

Esse projeto tem como finalidade criar uma API REST para **gerenciamento de rotas seguras**, com o intuito de auxiliar na segurança do Rio de Janeiro.

Utiliza o framework **NestJs** por sua modularidade, escalabilidade e uso do TypeScript, além do banco de dados relacional **PostgreSQL** para persistencia dos dados.

---

## ⚙️ Como Executar o Projeto

### ✅ *Pré-requisitos*
- Git
- Docker
- npm

---

### 1. Clone o repositório

```bash
  git clone https://github.com/GabrielDuarteRB/rotas-seguras.git
  cd rotas-seguras
```

### 2. Instale as dependencias do projeto

```bash
  npm install
```

### 3. Configure o .env

Crie um `.env.local` na raiz do projeto e configure algumas variáveis.

```env
# Configurações do banco de dadaos

DB_HOST=api-policial
DB_PORT=5432
DB_USERNAME=root
DB_PASSWORD=password
DB_NAME=policial

#Configurações de e-mail (preencher com susas credenciais)
EMAIL_USER=gabriel@gmail.com
EMAIL_PASS=GERENCIADOR_DE_SENHAS

#URL do microsserviço das credenciais
USER_SERVICE_URL=http://localhost:3001
```

### 4. Executar o Docker

```bash
  docker compose build
  docker compose up
```

> Após a execução, os containers da aplicação e do banco, serao iniciados e as tabelas criadas automaticamente.

---

## 🚀 Tecnologias Utilizadas
- Nest Js - Framework baseado no Node.js
- TypeScript - Linguagem fortemente tipada
- PostgreSQL - Banco de dados relacional
- Sequelize - ORM para integração com o banco de dados
- Docker - Containerização da aplicação.

## 🧪 Como testar o projeto

Para realizar os testes no projeto, acesse a interface do Swagger disponivel em:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Na documentação visual, poderá:

- Visualizar os endpoints diponíveis
- Testar requisições diretamente pelo navegador
- Enviar paraêmtros de rota e body das requisições

> ⚠️ **Importante:** Para acessar rotas protegidas, é necessário passar o token JWT de autenticação.

### Como passar o token

1. Clique em **"Authorize"** no canto superior direito da interface do Swagger.
2. Informe o token pela aplicação de gerenciamento de usuarios.
3. Clique em **"Close"** e utilize os endpoints protegidos.

---

## 📁 Estrutura modular

``` css
src/
|  |__rota/
|     |-- rota.controller.ts
|     |-- rota.service.ts
|     |-- rota.repository.ts
|     |-- rota.module.ts
|     |__entity
|        |-- rota.entity.ts
|     |__dto
|        |--create-route.dto.ts
|-- app.module.ts
|-- main.ts
```

👨‍💻 Autores

- Gabriel Duarte
- Mauro Felippe
- Niccolas Leal
- Yago Avila
