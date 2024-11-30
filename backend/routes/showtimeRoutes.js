const express = require("express");
const router = express.Router();
const Showtime = require("../models/showtime");

// List showtimes for a movie
router.get("/:movieId", async (req, res) => {
  try {
    const showtimes = await Showtime.find({ movie: req.params.movieId });
    res.send(showtimes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a showtime
router.post("/", async (req, res) => {
  try {
    const showtime = new Showtime(req.body);
    await showtime.save();
    res.status(201).send(showtime);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;