// Importa o Mongoose e o modelo de Product
const mongoose = require('mongoose');
const Food = mongoose.model('Food');

// Busca por todos os produtos
exports.get = async() => {
	const res = await Food.find({}, 'name carboCount protCount fatCount quanti');
	return res;
}

// Busca um produto baseado no slug
exports.getByName = async(name) => {
	const res = await Food
	.findOne({ 
		name: name
	}, 'carboCount protCount fatCount quanti');
	return res
}

// Busca um produto baseado no ID
exports.getById = async(id) => {
	const res = await Food
	.findById(id);
	return res
}

// Cria um produto
exports.create = async(body) => {
	var food = new Food(body);
	const res = await food.save()
	return res;
}

// Atualiza um produto
exports.update = async(id, data) => {
	const res = await Food.findByIdAndUpdate(id, {
		$set: {
			title: data.title,
			description: data.description,
			price: data.price
		}
	});
	return res;
}

// Deleta um produto
exports.delete = async(id) => {
	const res = await Food.findOneAndRemove(id);
	return res;
}
