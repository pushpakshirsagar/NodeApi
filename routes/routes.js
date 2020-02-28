var express = require('express');
var router = express.Router();
const db = require('../config/db_config');
const User = require('../models/users');
// const sequelize = require("sequelize");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  User.findAll()
  	.then(users => {
  		// console.log(users)
  		// res.sendStatus(200);
  		res.send(users)
  	})

  	.catch(err =>console.log(err))
});
router.get('/abc', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("users.getUsers");
});

module.exports = router;
