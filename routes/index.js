var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'This is the main express-handlebars page' });
});

module.exports = router;
