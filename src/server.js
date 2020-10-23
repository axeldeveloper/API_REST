const express = require('express');
const db = require('./database/index');
const routes = require('./routes');
const cors = require('cors');

class Server {
    constructor() {
        this.server = express();
        this.dataBase();
        this.middleware();
        this.routes();
    }
  dataBase() {
    db.then(() => {
      console.log('run database')
  });
  }
  middleware() {
    this.server.use(cors());
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))
  }
  routes() {
    this.server.use(routes)
  }
}
module.exports = new Server().server;