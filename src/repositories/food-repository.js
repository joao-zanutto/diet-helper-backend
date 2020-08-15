// Importa o Mongoose e o modelo de Product
const mongoose = require('mongoose');
const Food = mongoose.model('Food');

exports.get = async() => {
	const res = await Food.find({}, 'name carboCount protCount fatCount quanti calories');
	return res;
}

exports.getByName = async(name) => {
	const res = await Food
	.findOne({ 
		name: name
	}, 'carboCount protCount fatCount quanti');
	return res
}

exports.getById = async(id) => {
	const res = await Food.findById(id);
	return res
}

exports.create = async(body) => {
	body.calories = Number(4*body.carboCount + 4*body.protCount + 9*body.fatCount)
	var food = new Food(body);
	const res = await food.save()
	return res;
}

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

exports.delete = async(id) => {
	const res = await Food.findOneAndRemove({_id: id});
	return res;
}
