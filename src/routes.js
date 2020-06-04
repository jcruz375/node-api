const express = require('express');
const routes = express.Router();

const producController = require('./controllers/ProductsController');

routes.get('/products', producController.index );
routes.get('/products/:id', producController.show );
routes.post('/products', producController.store );
routes.put('/products/:id', producController.update);
routes.delete('/products/:title', producController.destroy);

module.exports = routes;