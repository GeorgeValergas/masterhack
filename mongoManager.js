var dbcredentials = require("./dbcredentials");

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://' + dbcredentials.dbusername + ':' + dbcredentials.dbpassword + '@ds051873.mongolab.com:51873/spiritdb';

module.exports = {
  //////////////////
  // ADMIN STUFF //////
  /////////////////
  insertGoal: function(goalObject) {
  	// Use connect method to connect to the Server
  	MongoClient.connect(url, function(err, db) {
      // Insert a single document
      db.collection('goals').insertOne(goalObject, function(err, results) {
        db.close()
        assert.equal(null, err);
        assert.equal(1, results.insertedCount);
      });
    })
  },

  addParticipantToGoal: function(goalName, participantObject) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Insert a single participant to the participants list
      db.collection('goals').update({"name": goalName}, { $push: {"participants": participantObject}}, function(err, results) {
          // Fetch the document that was modified
          db.collection('goals').findOne({"name": goalName, "participants.email": participantObject.email}, function(err, item) {
            assert.equal(null, err);
            assert.notEqual(null, item);
            db.close();
          });
        });
    })
  },

  removeParticipantFromGoal: function(goalName, participantEmail) {
     // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Remove a single participant from the participants list
      db.collection('goals').update({"name": goalName}, { $pull: {"participants": {"email": participantEmail}}}, function(err, results) {
          // Fetch the document that was modified
          db.collection('goals').findOne({"name": goalName, "participants.email": participantEmail}, function(err, item) {
            assert.equal(null, err);
            assert.equal(null, item);
            db.close();
          });
      });
    })
  },

  markParticipantAsHavingPaid: function(goalName, participantEmail) {
     // Use connect method to connect to the Serverpaid
    MongoClient.connect(url, function(err, db) {
      // Set a participant as having paid 
      db.collection('goals').update({"name": goalName, "participants.email": participantEmail}, {$set: {"participants.$.paid": true}}, function(err, results) {
          // Fetch the document that was modified
          db.collection('goals').findOne({"name": goalName, "participants.email": participantEmail, "participants.paid": true}, function(err, item) {
            assert.equal(null, err);
            assert.notEqual(null, item);
            db.close();
          });
      });
    })
  },

  changeGoalAmount: function(goalName, goalAmount) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Change the value of the goal amount
      db.collection('goals').update({"name": goalName}, { $set: {"goalAmount": goalAmount}}, function(err, results) {
          // Fetch the document that was modified
          db.collection('goals').findOne({"name": goalName}, function(err, item) {
            assert.equal(null, err);
            assert.equal(goalAmount, item.goalAmount);
            db.close();
          });
        });
    })
  },

  findGoals: function(callback) {
    MongoClient.connect(url, function(err, db) {
      db.collection('goals').find().toArray(function (err, docs){
          if (docs != null) {
            db.close();
            callback(docs);
          }
      });
    });
  }
}