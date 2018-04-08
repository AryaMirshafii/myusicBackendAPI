'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var allSongSchema = new Schema({
  title: {
    type: String,
    default: ''
    
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  artist: {
    type: String,
    default: ''
    
  },
  label: {
    type: String,
    default: ''
    
  },
  genre: {
    type: String,
    default: ''
    
  },
  style: {
    type: String,
    default: ''
    //required: 'Name the location'
  },
  country: {
    type: String,
    default: ''
    //required: 'Name the location'
  },
  year: {
    type: String,
    default: ''
    //required: 'Name the location'
  },
  BPM: {
    type: String,
    default: ''
    //required: 'Name the location'
  }

})
//module.exports = mongoose.model('Tasks', TaskSchema,'Tasks');
module.exports = mongoose.model('allSongs', allSongSchema);


