/**
 * @module donationController
 */
const donationService = require("../services/donationService");
const asyncHandler = require("express-async-handler");

exports.getAllDonations = async (req, res) => {
  const donations = await donationService.getAllDonations();
  if (!donations) {
    res.status(404);
    throw new Error("Donations Not Found");
  }
  res.status(200).json(donations);
};

exports.getDonation = asyncHandler(async (req, res) => {
  const donationId = req.params.donationId;
  const donation = await donationService.getDonation(donationId);
  if (!donation) {
    res.status(404);
    throw new Error("Donation Not Found");
  }
  res.status(200).json(donation);
});
