// Importa o Mongoose e o modelo de Customer
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

// Realiza a criação de um customer
exports.create = async(body) => {
	var customer = new Customer(body);
	const res = await customer.save()
	return res;
}
