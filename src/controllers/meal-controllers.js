// Importa o repositório
const repository = require('../repositories/meal-repository');

// Requisita as funções do repositório e responde o cliente
exports.get = async(req, res, next) => {
	try{
		var data = await repository.get();
		res.status(200).send(data);
	} catch(e){
		res.status(400).send(e);
	};
}

exports.getById = async(req, res, next) => {
	try{
		var data = await repository.getById(req.params.id)
		res.status(200).send(data);
	} catch(e){
		res.status(400).send(e);
	};
}

exports.post = async(req, res, next) => {
	try{
		var data = await repository.create(req.body)
		res.status(201).send({ message: 'refeição ok'});
	} catch(e) {
		res.status(400).send({
			message: 'Falha ao cadastrar refeição',
			data: e
		})
	};
};

exports.delete = async(req, res, next) => {
	try{
		var data = await repository.delete(req.params.id)
		res.status(200).send("refeição removida com sucesso");
	} catch(e) {
		res.status(400).send(e);
	};
}
