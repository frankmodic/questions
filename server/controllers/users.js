var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = {

	show: function(req, res) {
		User.find({}).populate('questions')
		.exec(function(err, users){
			if (err){
				console.log('Could not grab the damn users!')
			}
			else {
				res.json(users);
			}
		})
	},

	create: function(req, res) {
		console.log('created a user')
		User.findOne({name: req.body.name}, function(err, user){
			if (user){
				res.json(user)
			} 
			else {
				var user = new User ({name: req.body.name});
				user.save(function(err, results){
				if(err) {
					var error_msg ={error: "Please input a name with at least three characters."}
					console.log('User was not added');
					res.json(error_msg);
				} 
				else {
					res.json(results)
				}
			})

			}
		})

	}
}