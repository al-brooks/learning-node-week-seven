const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { movies: movies });
});

router.post('/create', (req, res) => {
  let id = movies.length + 1;
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

module.exports = router;
