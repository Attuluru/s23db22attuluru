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

// List of all Bag
exports.bag_list = async function(req, res) {
    try{
        theBags = await Bag.find();
        res.send(theBags);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.bag_view_all_Page = async function(req, res) {
try{
thebags = await Bag.find();
res.render('bag', { title: 'Bag Search Results', results: thebags });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle bag create on POST.
exports.bag_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bag();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bag_type":"goat", "cost":12, "size":"large"}
    //{ name: "puma", cost: 20.99, Type: "Contander backpack" }
    document.name = req.body.name;
    document.cost = req.body.cost;
    document.Type = req.body.Type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific bag.
exports.bag_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Bag.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
    // Handle bag update form on PUT.
    exports.bag_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Bag.findById( req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.name = req.body.name;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.Type) toUpdate.Type = req.body.Type;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    // Handle bag delete on DELETE.
exports.bag_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Bag.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }

    };
    
// Handle a show one view with id specified by query
exports.bag_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await Bag.findById( req.query.id)
res.render('bagdetail',{ title: 'bag Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a bag.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bag_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('bagcreate', { title: 'bag Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }

// Handle building the view for updating a bag.
// query provides the id
exports.bag_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Bag.findById(req.query.id)
    res.render('bagupdate', { title: 'bag Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
    exports.bag_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Bag.findById(req.query.id)
    res.render('bagdelete', { title: 'bag Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };




