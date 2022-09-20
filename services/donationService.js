const donationModel = require("../models/donationModel");

exports.getAllDonations = async () => {
  const donations = await donationModel.find().sort({ createdAt: "desc" });
  const responseData = donations.map((donation) => ({
    ...donation._doc,
    image: process.env.DOMAIN_URI + donation.image,
    detailImage: process.env.DOMAIN_URI + donation.detailImage,
  }));
  return responseData;
};

exports.getDonation = async (donationId) => {
  const donation = await donationModel.findById(donationId);
  return donation;
};
