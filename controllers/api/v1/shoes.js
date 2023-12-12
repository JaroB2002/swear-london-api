//model importeren
const Shoes = require('../../../models/Shoes');

//functie om alle schoenen op te halen
const getAll = (req, res) => {
    Shoes.find({ "user": req.user._id})
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
    shoe.name = req.body.name;
    shoe.size = req.body.size;
    shoe.client = req.body.client;
    shoe.status = req.body.status;
    shoe.compound = req.body.compound;
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