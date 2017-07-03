var firebase = require('../backend/Firebase');
var express = require('express');
var router = express.Router();

var database = firebase.database();
var name=[];
var UCRef = database.ref('/drivers');

UCRef.once('value').then(function (p1) { name = p1.child('drivers') })


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('render', "hello");
});

module.exports = router;
