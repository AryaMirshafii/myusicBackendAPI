var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  
  AI = require('./api/models/aiModel'),
  Song = require('./api/models/songModel'),
  allSongs = require('./api/models/allSongModel'),
  
  
  bodyParser = require('body-parser');
  
//Connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/songDB'); 



// Initialzie bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var locationRoutes = require('./api/routes/songRoutes');
locationRoutes(app); //register the song route


var predictionRoutes = require('./api/routes/predictionRoute');
predictionRoutes(app); //register the prediction route


var allSongRoutes = require('./api/routes/allSongRoute');
allSongRoutes(app); //register the allSongs route



//start the server

app.listen(port);
console.log('Server started on: ' + port);