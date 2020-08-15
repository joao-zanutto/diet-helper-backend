const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	date: {
		type: Date,
		required: true
	},
	foods: [{
		food: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Food',
			required: true
		},
		quantity: {
			type: Number,
			default: 1,
			required: true
		}
	}],
	stats: {
		carboCount: {
			type: Number,
			required: true
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
		},
	}
});

module.exports = mongoose.model('Meal', schema);
