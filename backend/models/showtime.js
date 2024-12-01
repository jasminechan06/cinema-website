const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  theater: {type: String, required: true},
  screen: {type: Number, required: true}, 
  date: { type: Date, required: true },
  time: { type: String, required: true },
  availableSeats: { type: Number, required: true },
});

module.exports = mongoose.model("Showtime", showtimeSchema);