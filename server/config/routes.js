var Users = require(__dirname + '/../controllers/Users');
var Surveys = require(__dirname + '/../controllers/Surveys');

module.exports = function(app){

	app.post('/users', Users.create);

	app.get('/surveys', Surveys.index);
	app.post('/surveys', Surveys.create);
	app.put('/surveys/:id', Surveys.upvote);
	app.delete('/surveys/:id', Surveys.destroy);
	app.get('/surveys/:id', Surveys.show);

}