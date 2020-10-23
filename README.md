# API REST

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

API REST desenvolvida com NODEjs, um crud, para regsitro de usuários.

## Tecnologias
  - Nodejs.
  - Express.
  - Mongoose.
  - MongoDB.

### Installation

É necessário ter o mongo e NodeJS instalado em sua máquina.
* Crie um banco de dados com o nome users.
```sh
$ cd project
$ npm install ou yarn
$ yarn dev
```
Crie um arquivo na raiz do projeto do tipo .env e configure as variáveis de ambiente.
```sh
$ PORT=8000
$ URL_MONGO=mongodb://localhost/users
```
