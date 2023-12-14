// usermodel importeren
const User = require('../models/User');
//webtokens
const jwt = require('jsonwebtoken');
//config importeren
const config = require('config');
//functies
//signup functie
const signup = async (req, res, next) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
  
    try {
      const user = new User({ username: username });
      await user.setPassword(password);
      await user.save();
  
      //token for validation
      let token = jwt.sign(
        {
          uid: user._id,
          username: user.username
        },
        config.get('jwt.secret')
      );
  
      return res.json({
        status: "success",
        data: {
          token: token
        }
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: "Er is een fout opgetreden bij het opslaan van de gebruiker."
      });
    }
  };

//login functie
const login = async(req, res, next) =>{
    try{
        const result = await User.authenticate()(req.body.username, req.body.password);
        if (!result.user) {
            return res.json({
                status: "failed",
                message: "Login failed, user not found."
            });
        }

        let token = jwt.sign(
            {
                uid: result.user._id,
                username: result.user.username
            },
            config.get('jwt.secret')
        );

        return res.json({
                status: "success",
                data: {
                    token: token
                }
        });
    }catch(err) {
        res.json({
            "status": "error",
            "message": "error"
        });
    }
};

// exporteren van de functies
module.exports.signup = signup;
module.exports.login = login;