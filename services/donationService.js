const donationModel = require("../models/donationModel");

exports.getAllDonations = async () => {
  const donations = await donationModel.find().sort({ createdAt: "desc" });
  return donations;
};

exports.getDonation = async (donationId) => {
  const donation = await donationModel.findById(donationId);
  return donation;
};
