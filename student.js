// For Dependencies
var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var app = express();

//MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest_test', {
	useMongoClient: true
});

//For schema
var studentSchema = mongoose.Schema({
	Surname: String,
	Other_Names: String,
	Admission_Number: String,
	Age: Number,
	Sex: String,
	Admission_Year: Number,
	Level: Number,
});

//Return model
var Student = app.resource = restful.model('student', studentSchema)
.methods(['get', 'post', 'put', 'delete']);
module.exports = Student;
