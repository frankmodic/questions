var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create our friendSchema
var AnswerSchema = new mongoose.Schema({
	user: [{type:Schema.Types.ObjectId, ref: 'User'}],
	answer: {type: String, required: true, minlength: 5},
	evidence: {type: String},
	like: {type: Number},
	questions: [{type:Schema.Types.ObjectId, ref: 'Question'}]
}, {timestamps: true});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Answer', AnswerSchema);