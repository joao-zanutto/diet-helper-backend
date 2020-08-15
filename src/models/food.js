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
	quanti: {
		type: String,
		required: true,
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
	calories: {
		type: Number,
		required: true
	}
	
});

module.exports = mongoose.model('Food', schema);
