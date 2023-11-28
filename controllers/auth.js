// usermodel importeren
const User = require('../models/User');
//webtokens
const jwt = require('jsonwebtoken');
//functies
const signup = async(req, res, next) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        //token for validation
        let token = jwt.sign({
            uid: result._id,
            username: result.username            
        }, "SecretWord")

        res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
    }).catch(err => {
        res.json({
            "status": "error",
        })
    });
}
const login = async(req, res, next) =>{
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        res.json({
            "status": "success",
            "data": {
                "user": result
            }
        })
    }).catch(err => {
        res.json({
            "status": "error",
            "message": error
        })
    });
}

// exporteren van de functies
module.exports.signup = signup;
module.exports.login = login;