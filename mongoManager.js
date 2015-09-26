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

  addParticipantToGoal: function(goalObject, participant) {
  	
  },

  removeParticipantFromGoal: function(goalObject, participant) {
  	
  }
}