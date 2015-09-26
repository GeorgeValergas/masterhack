var dbcredentials = require("./dbcredentials");

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://' + dbcredentials.dbusername + ':' + dbcredentials.dbpassword + '@ds051873.mongolab.com:51873/spiritdb';

module.exports = {
  insertGoal: function(goalObject) {
  	// Use connect method to connect to the Server
  	MongoClient.connect(url, function(err, db) {
      // Insert a single document
      db.collection('goals').insertOne(goalObject, function(err, r) {
        db.close()
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);
      });
    })
  },

  addParticipantToGoal: function(goalName, participantObject, participant) {

  },

  changeGoalAmount: function(goalName, goalAmount) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Insert a single participant to the participants list
      db.collection('goals').update({"name": goalName}, { $set: {"goalAmount": goalAmount}}, function(err, results) {
          // Fetch the document that we modified
          db.collection('goals').findOne({"name": goalName}, function(err, item) {
            assert.equal(null, err);
            assert.equal(goalAmount, item.goalAmount);
            db.close();
          });
        });
    })
  },


  removeParticipantFromGoal: function(goalObject, participant) {
  	
  }
}