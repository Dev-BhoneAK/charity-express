const eventModel = require("../models/eventModel");

exports.getAllEvents = async () => {
  const events = await eventModel.find().sort({ createdAt: "desc" });
  return events;
};

exports.getEvent = async (eventId) => {
  const event = await eventModel.findById(eventId);
  return event;
};
