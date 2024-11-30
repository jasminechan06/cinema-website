const Movie = require("../models/movie");

// Get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies", error: error.message });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  try {
    const { title, genre, duration, releaseDate, showtimes } = req.body;
    const newMovie = new Movie({ title, genre, duration, releaseDate, showtimes });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: "Failed to add movie", error: error.message });
  }
};

module.exports = { getMovies, addMovie };