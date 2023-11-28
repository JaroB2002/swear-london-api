//model importeren
const Shoes = require('../../../models/Shoes');

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
const create = (req, res, next) => {
    let shoe = new Shoes();
    shoe.text = req.body.text;
    shoe.user = req.body.user;
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
            res.json({ 
                "status": "error",
                "message": "Could not save this shoe"
            });
        });
}

//functies exporteren
module.exports.getAll = getAll;
module.exports.create = create;