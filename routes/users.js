var express = require('express');
var router = express.Router();


var californiapeople = {
   people: [
{"name":"Adams","first":"Ansel","profession":"photographer",
   "born"       :"SanFrancisco"},
{"name":"Muir","first":"John","profession":"naturalist",
   "born":"Scotland"},
{"name":"Schwarzenegger","first":"Arnold",
   "profession":"governator","born":"Germany"},
{"name":"Wellens","first":"Paul","profession":"author",
   "born":"Belgium"}
]   };

/*
app.get('/californiapeople', function(req, res)
{
res.render('californiapeople', californiapeople);
});
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', californiapeople);
});

module.exports = router;
