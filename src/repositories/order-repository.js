// Importa o Mongoose e o modelo de Order
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

// Busca todos os pedidos
exports.get = async() => {
    const res = await Order
        .find({}, 'number, status')
        .populate('customer', 'name')
        .populate('items.product', 'title')
	return res;
}

// Cria um pedido
exports.create = async(body) => {
	var order = new Order(body);
	const res = await order.save()
	return res;
}
