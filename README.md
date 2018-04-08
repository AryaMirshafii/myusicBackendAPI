An API for the Myuzic IOS application that implements REST and CRUD standards. The api allows the Myuzic app to store and retrieve data about songs the user listened to, as well as analyzing this data using a TensorFlow neural network linear regression model. The output of this TensorFlow model is stored and returned through the /aiPredictions routes. The TensorFlow model is written in Python and Keras.


The API can be run by starting Mongodb by typing “sudo mongod” in Terminal and then by activating the start script by typing “npm run start” in a separate tab.

This API has 4 Routes
/songs
/songs/songID
The above are used to store and retrieve JSON data of the songs that the user listened to.



/aiPredictions
/aiPredictions/predictionID

The above are used to store and retrieve JSON data of the predictions made by the neural network.

