//functie om alle schoenen op te halen
const getAll = (req, res) => {
    res.json({ 
        "status": "succes",
        "data":{
            "shoes": [
                "Nike Air Max 90",
                "Adidas Superstar",
                "Puma Clyde"
            ]
        } 
    });
}
//functie om schoen op te slaan
const create = (req, res) => {
    res.json({ 
        "status": "succes",
        "data":{
            "shoe": "Nike Air Max 90"
        } 
    });
}

//functies exporteren
module.exports.getAll = getAll;
module.exports.create = create;