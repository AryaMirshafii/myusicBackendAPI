'use strict';
module.exports = function(app) {
  var songList = require('../controllers/songListController');

  // todoList Routes
	app.route('/songs')
    .get(songList.listSongs)
    .post(songList.createASong);


	app.route('/songs/:songID')
    .get(songList.readASong)
    .put(songList.updateASong)
    .delete(songList.deleteASong);




    
};