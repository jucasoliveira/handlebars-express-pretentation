var firebase = require('firebase');

var config = {
    apiKey: "YOURKEY",
    authDomain: "YOURDOMAIN",
    databaseURL: "YOURURL",
    projectId: "YOURID",
    storageBucket: "YOURATORAGEBUCKET",
    messagingSenderId: "YOURID"
};
firebase.initializeApp(config);


module.exports = firebase;
