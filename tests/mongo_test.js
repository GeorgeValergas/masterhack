var mongoManager = require("../mongoManager.js");
var goalName = "Buying car for Chantale";

var goal = {
  "name": goalName,
  "goalAmount": 50000,
  "active": true, //If this is FALSE, the idea is cancelled
  "complete": false, //If this is TRUE, the payment was captured from everyone. If FALSE, it is still only authorized
  "participants": [
    {
      "email" : "mark@concordia.ca",
      "amount" : 1000,
      "paid": true
    },
    {
      "email" : "george@concordia.ca",
      "amount" : 1000,
      "paid": false
    },
    {
      "email" : "double@concordia.ca",
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
var goals;
mongoManager.findGoals(function(docs){
  goals = (docs);
  console.log(goals);
});