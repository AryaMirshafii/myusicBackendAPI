
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aiSchema = new Schema({
  songList: {
    type: String,
    default: ''
    
  }
  

});


//module.exports = mongoose.model('aiPredictions', aiSchema,'aipredictions');
module.exports = mongoose.model('aiPredictions', aiSchema);
