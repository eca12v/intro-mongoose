// var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('in millie.js route');
});

module.exports = router;
