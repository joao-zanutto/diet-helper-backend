const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		index: true,
		unique: true
	},
	carboCount: {
		type: Number,
		required: true,
	},
	protCount: {
		type: Number,
		required: true
	},
	fatCount: {
		type: Number,
		required: true
	},
	quanti: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model('Food', schema);
