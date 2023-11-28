// Require mongoose
const mongoose = require('mongoose');
//Create a schema
const Schema = mongoose.Schema;
const shoesSchema = new Schema({
    text: {
        type:String,
        required: true
    },
    user: {
        type:String,
        required: true
    }
})
const Shoes = mongoose.model('Shoes', shoesSchema);

//export the model
module.exports = Shoes;