var express = require('express');
const bag_controlers= require('../controllers/bag');
var router = express.Router();
// GET request for one bag.
router.get('/bag/:id', bag_controlers.bag_detail);
/* GET bags */
router.get('/', bag_controlers.bag_view_all_Page );
module.exports = router;
/* GET detail bag page */
router.get('/detail', bag_controlers.bag_view_one_Page);



