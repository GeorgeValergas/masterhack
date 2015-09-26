var express = require('express');
var router = express.Router();

/* GET my goals page. */
router.get('/', function(req, res, next) {
  res.render('goals', { title: 'goals' });
});

/* GET goal by id. */
router.get('/:id', function(req, res, next) {
	//- get goal by ID
	//- get progress from goal object
	var currentUser = {
		paid: true,
		email: "float@gmail.com",
		amount: 100
	};
  res.render('goal', {title: req.params.id,progress:50,currentUser:currentUser});
});

module.exports = router;
