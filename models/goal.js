//This is what a project looks like IT'S NOT FINAL!!!

//There might be more attributes to add like payment tokens and whatever

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