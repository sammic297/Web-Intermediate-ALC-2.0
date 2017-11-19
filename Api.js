//For Dependencies
var express = require('express');
var router = express.Router();
var app = express();

//For models
var Student = require('../models/student')

//For Routes
router.get('/', function(req, res){
	res.send('*** Application Programming Interface is working ***');
});
Student.register(router, '/student');

//Return router
module.exports = router;  
