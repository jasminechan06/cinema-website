const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  showtime: { type: mongoose.Schema.Types.ObjectId, ref: "Showtime", required: true },
  seatNumber: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Ticket", ticketSchema);