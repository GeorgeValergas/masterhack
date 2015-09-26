var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Masters of Code boilerplate' });
});

router.post('/test', function(req, res, next) {
  res.json({this:"works"});
});

module.exports = router;
