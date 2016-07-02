var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');


module.exports = {
	show: function(req, res){
		Answer.find({}, function(err, results){
			if (err) {
				console.log('Didnt grab the answers')
			}
			else {
				res.json(results);
			}
		})
	},

	addAnswer: function(req, res) {
		console.log(req.body.question)
		Question.findOne({_id: req.body.question}, function(err, question){
			if (err){
				console.log('You sure you queried the right question, dumbass!?')
			}
			else {
				Question.update({_id: req.body.question}, {$inc: {number: + 1}}, function (err){
					if (err) {
						console.log('did not increase answers')
					}
					else {
						console.log('we added the number')
				User.findOne({_id: req.body.question}, function(err, user){
				var answer = new Answer ({name: req.body.question, answer: req.body.answer, evidence: req.body.evidence, like: 0})
				question.answers.push(answer)
				question.save(function(err){
					if (err) {
						console.log('Answer was not saved')
					}
					else {
						answer.save(function( err, results){
							if (err) {
							console.log('did not save the answer')
							var error_msg = {error: "Answer must be at least 10 characters"}
							}
							else {
								res.json(results);
							}
						})
					}
				})
				})
			}	
			})
		}
	})
	},

	addLike: function(req, res){
		console.log(req.params.id)
		Answer.update({_id: req.params.id}, {$inc: {like: + 1}}, function(err, results){
			if (err){
				console.log('did not add a like')
			} else {
				res.json(results)
			}
		})
	}
}