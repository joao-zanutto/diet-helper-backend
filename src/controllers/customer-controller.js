// Importa o repositório
const repository = require('../repositories/customer-repository');

// Requisita as funções do repositório e responde o cliente
exports.post = async(req, res, next) => {
	try{
		var data = await repository.create(req.body)	
		res.status(201).send({ message: 'Cliente ok'});
	} catch(e) {
		res.status(400).send({
			message: 'Falha ao cadastrar cliente',
			data: e
		})
	};
};
