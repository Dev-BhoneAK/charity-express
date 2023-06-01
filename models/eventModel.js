const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
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
    imageDetail: {
      type: String,
      required: true,
    },
    date: { type: Date, required: true },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: { type: String, required: true },
    summary: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
