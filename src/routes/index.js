// Arquivo de rota do index;
//	apenas envia a versão da API
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).send({
		title: "Node Store API",
		version: "0.0.6 FINAL"
	});
});

module.exports = router;
