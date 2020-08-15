// Importa o Mongoose e o modelo de Product
const mongoose = require('mongoose');
const Meal = mongoose.model('Meal');
const frepo = require('./food-repository')

exports.get = async() => {
	const res = await Meal.find({}, 'date foods stats');
	return res;
}

exports.getById = async(id) => {
	const res = await Meal.findById(id);
	return res
}

exports.create = async(body) => {
	body.date = Date.now();

	body.stats = {};
	body.stats.calories = 0;
	body.stats.carboCount = 0;
	body.stats.protCount = 0;
	body.stats.fatCount = 0;
	foods = body.foods
	for(i = 0; i < foods.length; i++){
		const foodStats = await frepo.getById(foods[i].food).catch((e) => console.log(e));
		quantity = foods[i].quantity
		body.stats.calories += quantity*foodStats.calories;
		body.stats.carboCount += quantity*foodStats.carboCount;
		body.stats.protCount += quantity*foodStats.protCount;
		body.stats.fatCount += quantity*foodStats.fatCount;
	}

	var meal = new Meal(body);
	const res = await meal.save()
	return res;
}

exports.delete = async(id) => {
	const res = await Meal.findOneAndRemove({_id: id});
	return res;
}
