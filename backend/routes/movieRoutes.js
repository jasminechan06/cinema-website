const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// List all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a movie
router.post("/", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).send(movie);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;