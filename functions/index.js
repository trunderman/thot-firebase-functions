const functions = require('firebase-functions');

const express = require('express');
const app = express();
const {postOneScream} = require('./handlers/screams')
const {getAllScreams} = require('./handlers/screams')
const {signup, login, uploadImage} = require('./handlers/users')
const FBAuth = require('./util/fbAuth')
const config = require('./util/config')
const firebase = require('firebase')



//Scream routes
app.get('/screams', getAllScreams)
app.post('/scream', FBAuth, postOneScream);


//User routes
app.post('/signup', signup)
app.post('/login', login)
app.post('./users/image', FBAuth, uploadImage)

exports.api = functions.https.onRequest(app);