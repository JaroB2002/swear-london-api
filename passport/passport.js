//zie passport-local-mongoose docs voor meer info
const passport = require('passport');
const User = require('../models/User');
// require config
const config = require('config');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// webtoken strategy
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('jwt.secret');

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({_id:jwt_payload.uid}).exec()
    .then(user => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch(err => {
      return done(err, false);
    });
}));

//export passport
module.exports = passport;