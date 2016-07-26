var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String
	// surveys :
})

mongoose.model('User', UserSchema);