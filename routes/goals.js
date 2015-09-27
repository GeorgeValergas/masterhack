var express = require('express');
var router  = express.Router();
var mm		= require('../mongoManager');
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
		amount: 100,
		id: req.params.id
	};
	// var userId = req.params.id;
  res.render('goal', {title: "Buy Chantale a Shoebox ",progress:50,user:currentUser,goal:currentGoal});
});

module.exports = router;
