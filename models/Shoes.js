// Require mongoose
const mongoose = require('mongoose');
//Create a schema
const Schema = mongoose.Schema;
const shoesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    compound: {
        outside_01: { type: String, required: true },
        laces: { type: String, required: true },
        inside: { type: String, required: true },
        outside_2: { type: String, required: true },
        sole_bottom: { type: String, required: true },
        sole_top: { type: String, required: true }
    }
})
const Shoes = mongoose.model('Shoes', shoesSchema);

//export the model
module.exports = Shoes;