var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
	question: String,
	_user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
	options: [{value: String, upvote: {type: Number, default: 0}}]

	// option1: {
	// 	value: String,
	// 	upvote: {type: Number, default:0}
	// },
	// option2: {
	// 	value: String,
	// 	upvote: {type: Number, default:0}
	// },
	// option3: {
	// 	value: String,
	// 	upvote: {type: Number, default:0}
	// },
	// option4: {
	// 	value: String,
	// 	upvote: {type: Number, default:0}
	// },
	// surveys :
})

mongoose.model('Survey', SurveySchema);