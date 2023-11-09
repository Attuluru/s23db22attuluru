const mongoose = require("mongoose")
const bagSchema = mongoose.Schema({
name: String,
cost: Number,
Type: String
})
module.exports = mongoose.model("bag",bagSchema)