const express = require("express")
const { postWaitlist } = require("../controller/waitlistController");
const router = express.Router()

// POST TODO
router.post("/waitlist", postWaitlist)

module.exports = router;