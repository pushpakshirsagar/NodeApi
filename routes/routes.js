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
router.post('/add', function(req, res, next) {


  const data={
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email
  };
  let {email,first_name,last_name} = data;
  User.create({
    email,first_name,last_name
  }).then(users=>res.sendStatus(200))
  .catch(err=>console.log(err));
 
});

router.post('/delete',function(req,res,next){
  var id=req.body.id;
  User.destroy({where: {id: id}})
  .then(response=>{res.sendStatus(200)})
  .catch(err=>console.log(err));
})


router.post('/update',function(req,res,next){
  console.log(req.body)
  User.findAll({
  where: {id: req.body.id}})
  .then(response=>{res.send(response)})
  .catch(err=>console.log(err));

})
module.exports = router;
