const express = require('express');
const router = express.Router();

//POST /shoes
router.post("/", (req, res) => {
    res.json({ 
        "status": "succes",
        "data":{
            "shoe": "Nike Air Max 90"
        } 
    });
});

//TODO: DELETE /shoes/:id
//TODO: PUT /shoes/:id

//GET /shoes
router.get("/", (req, res) => {
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
});

//TODO: GET /shoes/:id

//Router exporteren
module.exports = router;