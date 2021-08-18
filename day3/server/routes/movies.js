const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { movies: movies });
});

module.exports = router;
