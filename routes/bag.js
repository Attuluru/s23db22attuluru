var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bag', { title: 'Search Results for bag' });
});

module.exports = router;
