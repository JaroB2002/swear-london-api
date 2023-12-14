var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');
//Import passport
const passport = require('passport');
//import controller user
const userController = require('../controllers/api/v1/users');

/* GET users listing. */
router.get("/", passport.authenticate('jwt', { session: false }), userController.getAll);


router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
