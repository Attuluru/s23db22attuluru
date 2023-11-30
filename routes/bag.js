var express = require('express');
const bag_controlers= require('../controllers/bag');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  };
  
// GET request for one bag.
router.get('/bag/:id', bag_controlers.bag_detail);
/* GET bags */
router.get('/', bag_controlers.bag_view_all_Page );
module.exports = router;
/* GET detail bag page */
router.get('/detail', bag_controlers.bag_view_one_Page);
/* GET create bag page */
router.get('/create', secured, bag_controlers.bag_create_Page);
/* GET create update page */
router.get('/update', hsecured, bag_controlers.bag_update_Page);
/* GET delete bag page */
router.get('/delete', secured ,bag_controlers.bag_delete_Page);



