var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create our friendSchema
var QuestionSchema = new mongoose.Schema({
	user: [{type:Schema.Types.ObjectId, ref: 'User'}],
	question: {type: String, minlength: 10, required: true },
	description: {type: String},
	number: {type: Number},
	answers: [{type:Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Question', QuestionSchema);