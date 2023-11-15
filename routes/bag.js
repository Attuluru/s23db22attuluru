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
/* GET create bag page */
router.get('/create', bag_controlers.bag_create_Page);
/* GET create update page */
router.get('/update', bag_controlers.bag_update_Page);
/* GET delete bag page */
router.get('/delete', bag_controlers.bag_delete_Page);



