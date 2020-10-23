const {Router} = require('express');
const routes = Router();
const usersController = require('./app/controllers/usersController');

routes.get('/list', usersController.index);
routes.post('/create', usersController.store);
routes.put('/update/:id', usersController.update);
routes.delete('/remove/:id', usersController.delete);

module.exports = routes;