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

router.put('/update/:userId', function(req, res){
    console.log('hit put route - updateMillie');
    var id = req.params.userId;
    //finds user by id from param
    User.findOne({'_id': id}, function(err, userResult) {
      console.log('find user result = ', userResult);
      // updates the user info using inf from the request body
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        userResult.name = req.body.name;
        userResult.admin = req.body.admin;

        userResult.save(function(err) {
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            console.log('Update user = ', userResult._id);
            res.send(userResult);
            /**
              Thought: What do you want your API to return.
              Just a status code? The updated user object?
              Or the userResult._id? res.send(userResult);
            **/
          }
        });
      }
    });
  }); //end update Millie route

router.delete('/delete/:userId', function(req, res){

    var id = req.params.userId;
    User.findOne({'_id': id}, function(err, userResult) {
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        User.remove({_id: userResult._id}, function(err) {});
        res.sendStatus(200);
      }
    });
  });// end delete route



module.exports = router;
