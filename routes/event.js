const express = require("express");
const { createEvent, getAllEvents } = require("../controllers/event");
const router = express.Router();

router.post("/event", createEvent);
router.get("/event", getAllEvents);

module.exports = router;