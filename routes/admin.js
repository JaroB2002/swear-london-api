var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');
//Import passport
const passport = require('passport');

router.put('/change-password', authController.changePassword);

module.exports = router;
