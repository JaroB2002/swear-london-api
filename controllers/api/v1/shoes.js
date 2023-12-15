//model importeren
const Shoes = require('../../../models/Shoes');

//functie om alle schoenen op te halen
const getAll = (req, res) => {
    Shoes.find()
        .then(docs => {
            res.json({ 
                "status": "succes",
                "data": {
                    "shoes": docs
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
}
//functie getById
const getById = (req, res) => {
    let id = req.params.id;
    Shoes.findById(id)
        .then(doc => {
            res.json({ 
                "status": "Getting order with id " + id,
                "data": {
                    "shoe": doc
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
}
//functie om een order te annuleren
const deleteById = (req, res) => {
    let id = req.params.id;
    Shoes.findByIdAndDelete(id)
        .then(doc => {
            res.json({ 
                "status": "Deleting order with id " + id,
                "data": {
                    "shoe": doc
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
}

//functie om een order te updaten
const updateById = (req, res) => {
    let id = req.params.id;
    Shoes.findByIdAndUpdate(id, req.body, {new: true})
        .then(doc => {
            doc.save()
                .then(doc => {
                    res.json({ 
                        "status": "Updating order with id " + id,
                        "data": {
                            "shoe": doc
                        } 
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
            res.json({ 
                "status": "error",
                "message": "Could not update this shoe"
            });
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
    shoe.price = req.body.price;
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
module.exports.getById = getById;
module.exports.deleteById = deleteById;
module.exports.updateById = updateById;
module.exports.create = create;