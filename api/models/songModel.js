'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  locationName: {
    type: String,
    default: ''
    //required: 'Name the location'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  songName: {
    type: String,
    default: ''
  },


  bpm: {
    type: String,
    default: ''
  },


  artistName: {
    type: String,
    default: ''
  },

  albumName: {
    type: String,
    default: ''
  },


  numberOfPlays: {
    type: String,
    default: ''
  },

  genre: {
    type: String,
    default: ''
  },

  numberOfSkips: {
    type: String,
    default: ''
  },
  duration: {
    type: String,
    default: ''
  },

  lastPlayed: {
    type: String,
    default: ''
  },

})
//module.exports = mongoose.model('Tasks', TaskSchema,'Tasks');
module.exports = mongoose.model('Tasks', TaskSchema);


