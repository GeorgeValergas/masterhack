var express = require('express');
var router = express.Router();

/* GET users listing. */
//users/
//users/:id

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
