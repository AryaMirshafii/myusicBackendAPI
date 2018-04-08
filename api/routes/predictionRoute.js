'use strict';
module.exports = function(app) {
  var aiList = require('../controllers/predictionListController');

  



	app.route('/aiPredictions')
    .get(aiList.listAllpredictions)
    .post(aiList.createAPrediction);


    app.route('/aiPredictions/:preditctionID')
    .get(aiList.readAPrediction)
    .put(aiList.updateAPrediction)
    .delete(aiList.deleteAPrediction);
    
};