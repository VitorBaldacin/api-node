const express = require('express');
const router = express.Router();

const TokenController = require('./controllers/TokenController');

const ClienteController = require('./controllers/ClienteController')

router.post('/cliente', ClienteController.novo);

router.post('/token', TokenController.gera);

module.exports = router;