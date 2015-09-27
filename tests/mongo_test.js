var mongoManager = require("../mongoManager.js");
var goalName = "Paying for Chalet Damages";

var goal = {
  "name": goalName,
  "goalAmount": 5000,
  "active": true, //If this is FALSE, the idea is cancelled
  "complete": false, //If this is TRUE, the payment was captured from everyone. If FALSE, it is still only authorized
  "participants": [
    {
      "email" : "patrick@concordia.ca",
      "amount" : 1000,
      "paid": true
    },
    {
      "email" : "felicia@concordia.ca",
      "amount" : 10,
      "paid": false
    },
    {
      "email" : "int@concordia.ca",
      "amount" : 1000,
      "paid": false
    }
  ]
};

var participantEmail = "daniel@concordia.ca"
var participant = {
	"email" : participantEmail,
  "amount" : 1000,
	"paid": false
}
// var goals;
// mongoManager.findGoals(function(docs){
//   goals = (docs);
//   console.log(goals);
// });


// mongoManager.insertGoal(goal);
// mongoManager.setActive("5607231a00140e800ebaf1d9", true, function(res) {
//   console.log("\tactive:",res);
// });
// mongoManager.setComplete("5607231a00140e800ebaf1d9", false, function(res) {
//   console.log("\tcomplete:",res);
// });
// mongoManager.findGoal("5607231a00140e800ebaf1d9",function(doc) {
//   console.log(doc);
// });
mongoManager.changeGoalName("5607231a00140e800ebaf1d9", "Buying red car for Chantale");