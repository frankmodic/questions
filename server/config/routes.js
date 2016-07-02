var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');


module.exports = function(app){

app.get('/users', function(req, res){
	users.show(req, res);
})

app.post('/users', function(req, res){
	users.create(req, res);
})

app.get('/questions', function(req, res){
	questions.show(req, res);
})

app.post('/questions', function(req, res){
	console.log('we are in the route')
	questions.addQuestion(req, res)
})

app.get('/questions/:id', function(req, res){
	questions.showOne(req, res);
})

app.get('/answers', function(req, res){
	answers.show(req, res);
})

app.post('/addanswer', function(req, res){
	answers.addAnswer(req, res);
})

app.post('/like/:id', function(req, res){
	answers.addLike(req, res);
})


}