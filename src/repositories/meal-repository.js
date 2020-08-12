// Importa o Mongoose e o modelo de Product
const mongoose = require('mongoose');
const Meal = mongoose.model('Meal');

// Busca por todos os produtos
exports.get = async() => {
	const res = await Meal.find({}, 'date foods');
	return res;
}

// Busca um produto baseado no ID
exports.getById = async(id) => {
	const res = await Meal.findById(id);
	return res
}

// Cria um produto
exports.create = async(body) => {
	var meal = new Meal(body);
	const res = await meal.save()
	return res;
}

// Deleta um produto
exports.delete = async(id) => {
	const res = await Meal.findOneAndRemove({_id: id});
	return res;
}
