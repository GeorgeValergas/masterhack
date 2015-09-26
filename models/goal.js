//This is what a project looks like IT'S NOT FINAL!!!

//There might be more attributes to add like payment tokens and whatever


//Things that need to be done on a Goal object:

//- Create a Goal
//- Modify name or goal amount
//- Invite people to a Goal
//- Remove people from a Goal
//- Mark one person as having paid
//- Update the amount if it is different from the expected minimum
//- Cancel a Goal (mark active as FALSE)
//- Mark a Goal as complete once goal is reached (mark complete as TRUE)

//See https://mongodb.github.io/node-mongodb-native/2.0/reference/crud/

{
	"name":"Buying car for Chantale",
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
}