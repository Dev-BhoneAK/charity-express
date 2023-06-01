const eventModel = require("../models/eventModel");

exports.getAllEvents = async () => {
  const events = await eventModel.find().sort({ createdAt: "desc" });
  const responseData = events.map((event) => ({
    ...event._doc,
    image: process.env.DOMAIN_URI + event.image,
    imageDetail: process.env.DOMAIN_URI + event.imageDetail,
  }));
  return responseData;
};

exports.getEvent = async (eventId) => {
  const event = await eventModel.findById(eventId);
  return event;
};
