// usermodel importeren
const User = require('../models/User');
//functies
const signup = async(req, res, next) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            "status": "success",
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