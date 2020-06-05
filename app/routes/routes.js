const express = require('express');

const BookingController = require('../controllers/BookingController');
const ProductsController = require('../controllers/ProductsController');
const TypesController = require('../controllers/TypesController');
const SessionController = require('../controllers/SessionController');
const UserController = require('../controllers/UserController');

const routes = express.Router();

// routes.get

routes.put('/types/:id',TypesController.update);
routes.get('/types', TypesController.index);
routes.post('/types',TypesController.store);

module.exports = routes;

// routes.get('/rotaName',ControllerController.index);