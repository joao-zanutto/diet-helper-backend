// Importa o repositório e biblioteca de GUID
const repository = require('../repositories/order-repository');
const guid = require('guid')

// Requisita as funções do repositório e responde o cliente
exports.post = async(req, res, next) => {
    let val = guid.raw().substring(0, 6)
    let orderData = {
        number: val,
        customer: req.body.customer,
        items: req.body.items
    }
	try{
		var data = await repository.create(orderData)	
		res.status(201).send({ message: 'Pedido ok'});
	} catch(e) {
		res.status(400).send({
			message: 'Falha ao cadastrar pedido',
			data: e
		})
	};
};

exports.get = async(req, res, next) => {
	try{
		var data = await repository.get();
		res.status(200).send(data);
	} catch(e){
		res.status(400).send(e);
	};
}