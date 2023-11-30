// const mongoose = require("mongoose")
// const bagSchema = mongoose.Schema({
// name: String,
// cost: Number,
// Type: String
// })
// module.exports = mongoose.model("bag",bagSchema)

const mongoose = require("mongoose");
const bagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    Type: {
        type: String,
        required: true 
    },
    cost: {
        type: Number,
        min: 10,
        max: 30.99,
        required: true 
    }
});
module.exports = mongoose.model("bag", bagSchema); 