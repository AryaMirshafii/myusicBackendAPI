'use strict';



var mongoose = require('mongoose'),
AI = mongoose.model('allSongs');


exports.listAllSongs = function(req, res) {
  AI.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.addSong = function(req, res) {
  var newPrediction = new AI(req.body);
  newPrediction.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.readSong = function(req, res) {
  AI.findById(req.params.songID, function(err, task) {
    if (err)
      res.send(err);
    res.json(AI);
  });
};
exports.updateAsong = function(req, res) {
  AI.findOneAndUpdate({_id: req.params.songID}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};





exports.deleteASong = function(req, res) {


  AI.remove({
    _id: req.params.preditctionID
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'song successfully deleted' });
  });
};