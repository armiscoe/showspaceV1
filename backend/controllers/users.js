var User = require('../models/User')



module.exports = {
    newUser
}



function newUser(req, res) {
    const { email, password } = req.body;
    const createUser = new User({ email, password })
    createUser.save(function(err) {
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.")
        } else {
            res.status(200).send("Welcome to Showspace!")
        }
    })
}