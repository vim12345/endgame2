var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/failed', function(req, res) {
  req.flash("age", 23);
  req.flash("name", "vimal");
  res.send("kaa ho chacha")

});
router.get('/check', function(req, res) {
  console.log(req.flash("age"), req.flash("name"));
  res.send("check karlo");
});


module.exports = router;
