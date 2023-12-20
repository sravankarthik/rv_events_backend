const User = require("../models/user");

exports.signup = (req, res) => {
    const user = new User(req.body);
    console.log(user);
    user.save()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
};
