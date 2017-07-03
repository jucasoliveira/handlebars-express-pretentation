var express = require('express');
var router = express.Router();


var minasGeraisState = {
   town: [
{"name": "Belo Horizonte"},
{"name" : "Betim"},
{"name" : "Carmopolis"},
{"name" : "Sao jose do rio preto"}
]   };

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('town', minasGeraisState);
});

module.exports = router;
