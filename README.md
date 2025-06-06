# 📦 Projeto Rotas Seguras

Projeto desenvolvido em Nest Js com banco de dados em Postgres como parte da disciplina de desenvolvimento web no CEFET-RJ

---

## 📚 Descricao

Esse projeto tem como finalidade criar uma API REST para **gerenciamento de rotas seguras**, com o intuito de auxiliar na segurança do Rio de Janeiro.

Utiliza o framework **NestJs** por sua modularidade, escalabilidade e uso do TypeScript, além do banco de dados relacional **PostgreSQL** para persistencia dos dados.

---

## ⚙️ Como Rodar o Projeto

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

DB_HOST=db-policial
DB_PORT=5432
DB_USER=root
DB_PASSWORD=password
DB_NAME=policial

#Configurações de e-mail (preencher com suas credenciais, veja o time 3.2)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=gabriel@gmail.com
SMTP_PASSWORD=GERENCIADOR_DE_SENHAS

#URL do microsserviço das credenciais (No docker vai depender do sistema que voce esta usando, veja o item 3.1)
USER_SERVICE_URL=http://localhost:3001
```

### 🔗 3.1 Variavel USER_SERVICE_URL

A aplicação precisa se comunicar com o serviço de autenticação, que está sendo executado fora da nossa rede do Docker. Com isso, vamos precisar alterar essa variavel de `USER_SERVICE_URL` de acordo com o sistema operacional

**🐧 Linux**

1. Execute o seguinte comando para descobrir o IP do docker

```bash
ip addr show docker0
```

2. Busque o seguinte ip

```bash
inet 000.00.0.0/16
```

3. Copie apenas a parte do ip para dentro do env

```env
USER_SERVICE_URL=http://000.00.00.0:3001
```

**🪟 Windows**

No Windows é bem mais facil, basta adicionar o hostname que o Docker disponibiliza o por padrão `host.docker.internal`

```env
USER_SERVICE_URL=http://host.docker.internal:3001
```

### ✉️ 3.2 Variavel SMPT

Para realizar o envio com o email é preciso registrar um email e uma senha validos. Para isso iremos criar uma senha especifica para SMPT.

1. Acesse: https://myaccount.google.com/security
2. Na aba **Como voce faz login**, ative a verificação de duas etapas.
3. Uma nova opção irá aparecer assim que ativada, clique em **"Senhas do App"**
4. Digite um nome para identificar o app.
5. Copie a senha e utilize em `SMTP_PASSWORD`

Em `SMPT_USER` devemos usar o email que geramos a senha.

As outras duas variáveis (`SMTP_HOST` e `SMTP_PORT`) podem permanecer inalteradas, caso você esteja utilizando o Gmail como servidor SMTP.

---

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
- Nicollas Leal
- Yago Avila
