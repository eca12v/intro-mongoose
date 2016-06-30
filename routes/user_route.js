// var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('in user_route.js route');
});

module.exports = router;
