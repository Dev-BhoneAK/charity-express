const mongoose = require("mongoose");

const donationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    detailImage: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    currentFund: {
      type: Number,
      required: true,
    },
    goalFund: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    fundraiserInfo: {
      name: { type: String, required: true },
      created: { type: Date, required: true },
      phone: { type: String },
      location: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donation", donationSchema);
