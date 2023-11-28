const express = require('express');
const router = express.Router();
//shoescontroler importeren
const shoesController = require('../../../controllers/api/v1/shoes');

//POST /shoes
router.post("/", shoesController.create);

//TODO: DELETE /shoes/:id
//TODO: PUT /shoes/:id

//GET /shoes
router.get("/", shoesController.getAll);

//TODO: GET /shoes/:id

//Router exporteren
module.exports = router;