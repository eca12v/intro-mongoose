var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//need to require model within router file in order to use
var User = require('../models/user');

router.get('/:userId', function(req, res) {
  // console.log('in user_route.js route');
  var id = req.params.userId;
  console.log('req.params.userId:', id); // use comma not + when have string and object together, so don't log out object Object
  // res.sendStatus(200);

  //get user by specific user id and return user object to DOM
  User.findOne({'_id': id}, function(err, usersList) { // usersList can be called anything
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.send(usersList);
      }
    });
}); // end User.findOne


module.exports = router;
