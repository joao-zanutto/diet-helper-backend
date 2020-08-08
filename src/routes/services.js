// Arquivo contendo as rotas do endpoint /services para as respectivas funções nos controllers
// Possui funções GET, PUT e POST, sendo que as funções get podem ser feitos por
//  diversos parâmetros ou body correspondente aos services
const express = require('express');
const router = express.Router();
const controller = require('../controllers/service-controllers');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/hours/:name', controller.getPartnerHours);

module.exports = router;
