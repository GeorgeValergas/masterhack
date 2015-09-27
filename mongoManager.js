var dbcredentials = require("./dbcredentials");
var mongo = require('mongodb');
var ObjectID = mongo.ObjectID;
var MongoClient = mongo.MongoClient;
var assert = require('assert');

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
        db.close();
        assert.equal(null, err);
        assert.equal(1, results.insertedCount);
      });
    });
  },

  addParticipantToGoal: function(id, participantObject) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Insert a single participant to the participants list
      db.collection('goals').update({"_id": ObjectID(id)}, { $push: {"participants": participantObject}}, function(err, results) {
        // Fetch the document that was modified
        db.collection('goals').findOne({"_id": ObjectID(id), "participants.email": participantObject.email}, function(err, item) {
          assert.equal(null, err);
          assert.notEqual(null, item);
          db.close();
        });
      });
    });
  },

  removeParticipantFromGoal: function(id, participantEmail) {
     // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Remove a single participant from the participants list
      db.collection('goals').update({"_id": ObjectID(id)}, { $pull: {"participants": {"email": participantEmail}}}, function(err, results) {
        // Fetch the document that was modified
        db.collection('goals').findOne({"_id": ObjectID(id), "participants.email": participantEmail}, function(err, item) {
          assert.equal(null, err);
          assert.equal(null, item);
          db.close();
        });
      });
    });
  },

  markParticipantAsHavingPaid: function(id, participantEmail) {
     // Use connect method to connect to the Serverpaid
    MongoClient.connect(url, function(err, db) {
      // Set a participant as having paid 
      db.collection('goals').update({"_id": ObjectID(id), "participants.email": participantEmail}, {$set: {"participants.$.paid": true}}, function(err, results) {
        // Fetch the document that was modified
        db.collection('goals').findOne({"_id": ObjectID(id), "participants.email": participantEmail, "participants.paid": true}, function(err, item) {
          assert.equal(null, err);
          assert.notEqual(null, item);
          db.close();
        });
      });
    })
  },

  changeGoalAmount: function(id, goalAmount) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Change the value of the goal amount
      db.collection('goals').update({"_id": ObjectID(id)}, { $set: {"goalAmount": goalAmount}}, function(err, results) {
        // Fetch the document that was modified
        db.collection('goals').findOne({"_id": ObjectID(id)}, function(err, item) {
          assert.equal(null, err);
          assert.equal(goalAmount, item.goalAmount);
          db.close();
        });
      });
    });
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
  },

  findGoal: function(id, callback) {
    MongoClient.connect(url, function(err, db) {
      db.collection('goals').findOne({"_id": ObjectID(id)},function (err, doc){
        db.close();
        callback(doc);
      });
    });
  },

  setActive: function(id, isActive, callback) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Change the value of the active flag
      db.collection('goals').update({"_id": ObjectID(id)}, { $set: {"active": isActive}}, function(err, r) {
        db.collection('goals').findOne({"_id": ObjectID(id)}, function(err, item) {
          assert.equal(null, err);
          assert.equal(isActive, item.active);
          db.close();
          callback(item.active);
        });
      });
    });
  },

   setComplete: function(id, isComplete, callback) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      // Change the value of the active flag
      db.collection('goals').update({"_id": ObjectID(id)}, { $set: {"complete": isComplete}}, function(err, r) {
        db.collection('goals').findOne({"_id": ObjectID(id)}, function(err, item) {
          assert.equal(null, err);
          assert.equal(isComplete, item.complete);
          db.close();
          callback(item.complete);
        });
      });
    });
  }                
}