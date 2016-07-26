var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/surveys');

require(__dirname + '/../models/User.js');
require(__dirname + '/../models/Survey.js');