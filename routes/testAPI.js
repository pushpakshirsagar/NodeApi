var express = require('express');
var users = require('../models/users')

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(users.getUsers);
});

module.exports = router;