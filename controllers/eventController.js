/**
 * @module eventController
 */
const eventService = require("../services/eventService");
const asyncHandler = require("express-async-handler");

exports.getAllEvents = async (req, res) => {
  const events = await eventService.getAllEvents();
  if (!events) {
    res.status(404);
    throw new Error("Events Not Found");
  }
  res.status(200).json(events);
};

exports.getEvent = asyncHandler(async (req, res) => {
  const eventId = req.params.eventId;
  const event = await eventService.getEvent(eventId);
  if (!event) {
    res.status(404);
    throw new Error("Event Not Found");
  }
  res.status(200).json(event);
});
