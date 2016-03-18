var mongoose = require("mongoose");

// create the mongoose Schema
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//--------------------------------------------------------------
// Our User model.
// 
// This is how we create, edit, delete, and retrieve user
// accounts via MongoDB.
//--------------------------------------------------------------
module.exports.User = mongoose.model('User', new Schema({
	id:         ObjectId,
	firstName:  { type: String, required: '{PATH} is required.' },
	lastName:   { type: String, required: '{PATH} is required.' },
	username:   { type: String, required: '{PATH} is required.' },
	email:      { type: String, required: '{PATH} is required.', unique: true },
	password:   { type: String, required: '{PATH} is required.' },
	role:       { type: String, required: '{PATH} is required.' },
	isActive: 	{ type: Boolean }
}));