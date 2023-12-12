const express = require('express');
const router = express.Router();
const passport = require('passport');

//shoescontroler importeren
const shoesController = require('../../../controllers/api/v1/shoes');

//POST /shoes
router.post("/", shoesController.create);

//TODO: DELETE /shoes/:id
//TODO: PUT /shoes/:id

//GET /shoes
router.get("/", passport.authenticate('jwt', { session: false }), shoesController.getAll);

//TODO: GET /shoes/:id
router.get("/:id", passport.authenticate('jwt', { session: false }), shoesController.getById);

//Router exporteren
module.exports = router;