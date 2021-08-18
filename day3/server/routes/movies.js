const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { movies: movies });
});

router.post('/create', (req, res) => {
  let id = uuidv4();
  let name = req.body.name;
  let details = req.body.details;
  let genre = req.body.genre;
  let posterUrl = req.body.posterUrl;

  let movie = {
    id: id,
    name: name,
    details: details,
    genre: genre,
    posterUrl: posterUrl
  };

  movies.push(movie);
  res.redirect('/movies');
});

router.post('/delete', (req, res) => {
  const movieId = req.body.id;

  movies = movies.filter((movie) => {
    return movie.id != movieId;
  });

  res.redirect('/movies');
});

module.exports = router;
