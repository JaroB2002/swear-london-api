//model importeren
const User = require('../../../models/User');

//functie om aantal users op te halen
const getAll = (req, res) => {
    User.find()
        .then(docs => {
            res.json({ 
                "status": "succes",
                "data": {
                    "users": docs.map(doc => doc.username)
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
}

//functies exporteren
module.exports.getAll = getAll;