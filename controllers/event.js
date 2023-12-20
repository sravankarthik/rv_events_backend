const Event = require("../models/event");
const User = require("../models/user");

exports.createEvent = (req, res) => {
    const event = new Event(req.body);
    let { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not registered"
            })
        }
        if (!user.authenticator(password)) {
            return res.status(401).json({
                error: "Email and password do not match"
            })
        }
        event.save((err, request) => {
            if (err) {
                return res.status(400).json({
                    error: "Failed to save your request in DB",
                });
            }
            res.json(request);
        });
    });
};

exports.getAllEvents = (req, res) => {
    Event.find()
        .exec((err, event) => {
            if (err || !event) {
                return res.status(400).json({
                    error: "events were not found",
                });
            }
            res.json(event);
        });
};