'use strict';
module.exports = function(app) {
  var songList = require('../controllers/allSongsListController');

  // todoList Routes
	app.route('/allSongs')
    .get(songList.listAllSongs)
    .post(songList.addSong);


	app.route('/allSongs/:songID')
    .get(songList.readSong)
    .put(songList.updateAsong)
    .delete(songList.deleteASong);




    
};