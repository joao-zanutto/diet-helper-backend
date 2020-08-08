// Arquivo que contem as rotas para o endpoint /customers
//  arquivo simples pois o foco da atividade era nas classes products e services
const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

router.post('/', controller.post);

module.exports = router;
