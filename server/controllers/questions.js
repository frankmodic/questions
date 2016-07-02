var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');


module.exports = {
	
	show: function( req, res){
		Question.find({}).populate('answers')
		.exec(function(err, questions){
			if (err) {
				console.log('didnt grab the questions')
			}
			else {
				res.json(questions)
			}
		})
	},

	addQuestion: function(req, res) {
		User.findOne({_id: req.body.user}, function(err, user){
			if (err){
				res.json({err:'Did not this user.'})
			}
			else{
				var question = new Question ({question: req.body.question, description: req.body.desc, number: 0});
				user.questions.push(question)
				user.save(function(err){
					if (err){
						res.json({error:'Did not save the question to the user.'})
					}
					else{
						question.save(function(err, results){
							if (err){
								console.log('Did not save question')
								var error_msg = {error: "Question must be at least 10 characters"};
							}
							else{
								res.json(results);
							}
						})
					}
				})
			}
		})
	},

	showOne: function(req, res){
		console.log(req.params.id)

		Question.findOne({_id: req.params.id}, function(err, question){
			if(err){
				console.log('Hey, dummy, somethings wrong. Youre not grabbing a question!')
			}
			else {
				console.log('There we go, we grabbed the question!')
				res.json(question)
			}
		})
	}
}