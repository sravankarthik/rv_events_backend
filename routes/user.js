let express = require("express");
const { signup } = require("../controllers/user");
let router = express.Router();

router.post("/signup", signup);

module.exports = router;