// Importa o repositório
const repository = require('../repositories/service-repository');

// Requisita as funções do repositório e responde o cliente
exports.get = async(req, res, next) => {
	try{
		var data = await repository.get();
		res.status(200).send(data);
	} catch(e){
		res.status(400).send(e);
	};
}

exports.getPartnerHours = async(req, res, next) => {
	try{
		var data = await repository.getPartnerHours(req.params.name, req.body.hours)
		res.status(200).send(data);
	} catch(e){
		res.status(400).send(e);
	};
}

exports.getBySlug = async(req, res, next) => {
	try{
		var data = await repository.getBySlug(req.params.slug)
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
		res.status(201).send({ message: 'Serviço ok'});
	} catch(e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Serviço',
			data: e
		})
	};
};

exports.put = async(req, res, next) => {
	try{
		var data = await repository.update(req.params.id, req.body)
		res.status(200).send("Serviço atualizado com sucesso");
	} catch(e) {
		res.status(400).send(e);
	};
}