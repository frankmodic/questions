var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create our friendSchema
var UserSchema = new mongoose.Schema({
	name: {type: String, minlength: 3, required: true},
	questions: [{type:Schema.Types.ObjectId, ref: 'Question'}]
}, {timestamps: true});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('User', UserSchema);