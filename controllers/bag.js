var Bag = require('../models/bag');
// List of all Bag
exports.bag_list = function(req, res) {
res.send('NOT IMPLEMENTED: Bag list');
};
// for a specific bag.
exports.bag_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Bag detail: ' + req.params.id);
};
// Handle bag create on POST.
exports.bag_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Bag create POST');
};
// Handle bag delete form on DELETE.
exports.bag_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Bag delete DELETE ' + req.params.id);
};
// Handle bag update form on PUT.
exports.bag_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Bag update PUT' + req.params.id);
};
