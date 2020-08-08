// Importa o Mongoose e o modelo de Product
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Busca por todos os produtos
exports.get = async() => {
	const res = await Product.find({ 
			active: true
		}, 'title price slug');
	return res;
}

// Busca produtos baseado em tags
exports.getByTag = async(tag) => {
	const res = await Product
	.find({ 
		active: true, 
		tags: tag
	}, 'title price slug');
	return res
}

// Busca um produto baseado no slug
exports.getBySlug = async(slug) => {
	const res = await Product
	.findOne({ 
		active: true, 
		slug: slug
	}, 'title description price slug tags');
	return res
}

// Busca um produto baseado no ID
exports.getById = async(id) => {
	const res = await Product
	.findById(id);
	return res
}

// Cria um produto
exports.create = async(body) => {
	var product = new Product(body);
	const res = await product.save()
	return res;
}

// Atualiza um produto
exports.update = async(id, data) => {
	const res = await Product.findByIdAndUpdate(id, {
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
	const res = await Product.findOneAndRemove(id);
	return res;
}
