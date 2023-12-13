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
        outside_01: {type: Object},
        laces: {type: Object},
        inside: {type: Object},
        outside_2: {type: Object},
        sole_bottom: {type: Object },
        sole_top: {type: Object}
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user :{
        type: Object
    }
})
const Shoes = mongoose.model('Shoes', shoesSchema);

//export the model
module.exports = Shoes;