const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donationController.js");

router.get("/", donationController.getAllDonations);

router.get("/:donationId", donationController.getDonation);

module.exports = router;
