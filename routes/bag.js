var express = require('express');
const bag_controlers= require('../controllers/bag');
var router = express.Router();
/* GET bags */
router.get('/', bag_controlers.bag_view_all_Page );
module.exports = router;


