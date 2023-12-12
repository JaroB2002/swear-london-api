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
        outside_01: { type: String },
        laces: { type: String},
        inside: { type: String },
        outside_2: { type: String },
        sole_bottom: { type: String },
        sole_top: { type: String }
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Shoes = mongoose.model('Shoes', shoesSchema);

//export the model
module.exports = Shoes;