var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bag_controller = require('../controllers/bag');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// BAGS ROUTES ///
// POST request for creating a Bag.
router.post('/bags', bag_controller.bag_create_post);
// DELETE request to delete Bag.
router.delete('/bags/:id', bag_controller.bag_delete);
// PUT request to update Bag.
router.put('/bags/:id', bag_controller.bag_update_put);
// GET request for one Bag.
router.get('/bags/:id', bag_controller.bag_detail);
// GET request for list of all Costume items.
router.get('/bags', bag_controller.bag_list);
module.exports = router;

