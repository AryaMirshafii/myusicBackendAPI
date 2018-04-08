'use strict';



var mongoose = require('mongoose'),
AI = mongoose.model('aiPredictions');


exports.listAllpredictions = function(req, res) {
  AI.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.createAPrediction = function(req, res) {
  var newPrediction = new AI(req.body);
  newPrediction.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.readAPrediction = function(req, res) {
  AI.findById(req.params.preditctionID, function(err, task) {
    if (err)
      res.send(err);
    res.json(AI);
  });
};
exports.updateAPrediction = function(req, res) {
  AI.findOneAndUpdate({_id: req.params.preditctionID}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};





exports.deleteAPrediction = function(req, res) {


  AI.remove({
    _id: req.params.preditctionID
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'prediction successfully deleted' });
  });
};