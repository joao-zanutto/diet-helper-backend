// Importa o Mongoose e o modelo de Service
// 	OBS: função de deletar um serviço foi retirada para ficar identico aos requisitos do exercicio,
//		 porém sua implementação seria identica a dos outros objetos da nossa API
const mongoose = require('mongoose');
const Service = mongoose.model('Service');

// Busca todos os serviços
exports.get = async() => {
	const res = await Service.find({ 
		}, 'title price slug');
	return res;
}

// Busca um serviço pela slug
exports.getBySlug = async(slug) => {
	const res = await Service
	.findOne({ 
		slug: slug
	}, 'title description price slug');
	return res
}

// Busca um produto pelo ID
exports.getById = async(id) => {
	const res = await Service
	.findById(id);
	return res
}

// Busca serviços baseados no funcionario e horários disponiveis
exports.getPartnerHours = async(partnerName, serviceHours) => {
	const res = await Service.find({ 
			partner: { "$regex": partnerName, "$options": "i"},
			hours:  serviceHours
		}, 'title partner');
	return res;
}

// Cria um serviço
exports.create = async(body) => {
	var service = new Service(body);
	const res = await service.save()
	return res;
}

// Atualiza um serviço
exports.update = async(id, data) => {
	const res = await Service.findByIdAndUpdate(id, {
		$set: {
			title: data.title,
			description: data.description,
			price: data.price
		}
	});
	return res;
}