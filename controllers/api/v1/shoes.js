// Require mongoose
const mongoose = require('mongoose');
//Create a schema
const Schema = mongoose.Schema;
const shoesSchema = new Schema({
    text: String,
    user: String
})
const Shoes = mongoose.model('Shoes', shoesSchema);

//functie om alle schoenen op te halen
const getAll = (req, res) => {
    Shoes.find({ "user": "Jan" })
        .then(docs => {
            res.json({ 
                "status": "succes",
                "data": {
                    "shoes": docs.map(doc => doc.text)
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
}
//functie om schoen op te slaan
const create = (req, res) => {
    let shoe = new Shoes();
    shoe.text = "My first shoe";
    shoe.user = "Jan";
    //opslaan in database
    shoe.save()
        .then(doc => {
            console.log("geen error");
            res.json({ 
                "status": "succes",
                "data": {
                    "shoe": doc
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
}

//functies exporteren
module.exports.getAll = getAll;
module.exports.create = create;