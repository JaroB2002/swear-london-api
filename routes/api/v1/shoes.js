const express = require('express');
const router = express.Router();
const passport = require('passport');

//shoescontroler importeren
const shoesController = require('../../../controllers/api/v1/shoes');

//POST /shoes
router.post("/", shoesController.create);

//DELETE /shoes/:id
router.delete("/:id", passport.authenticate('jwt', { session: false }), shoesController.deleteById);

//PATCH /shoes/:id
router.patch("/:id", passport.authenticate('jwt', { session: false }), shoesController.updateById);

//GET /shoes
router.get("/", passport.authenticate('jwt', { session: false }), shoesController.getAll);

//TODO: GET /shoes/:id
router.get("/:id", passport.authenticate('jwt', { session: false }), shoesController.getById);

//Router exporteren
module.exports = router;