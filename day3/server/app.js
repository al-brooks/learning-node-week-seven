const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const { v4: uuidv4 } = require('uuid');
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

const moviesRouter = require('./routes/movies');

global.movies = [
  {
    id: uuidv4(),
    name: 'The Matrix',
    details: 'Iconic',
    genre: 'Sci-fi',
    posterUrl:
      'https://cdn.shopify.com/s/files/1/1057/4964/products/the-matrix-vintage-movie-poster-original-1-sheet-27x41-5184.jpg?v=1622610141'
  },
  {
    id: uuidv4(),
    name: 'My Cousin Vinny',
    details: 'Classic',
    genre: 'Comedy',
    posterUrl:
      'https://lumiere-a.akamaihd.net/v1/images/image_777abb36.jpeg?region=0%2C0%2C1785%2C2063'
  },
  {
    id: uuidv4(),
    name: 'Into the Spiderverse',
    details: 'Comic Book Movie Gold Standard',
    genre: 'Action',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg'
  },
  {
    id: uuidv4(),
    name: 'Creed',
    details: 'Boxing Classic',
    genre: 'Action',
    posterUrl:
      'https://cdn.shopify.com/s/files/1/1416/8662/products/creed_2015_advance_original_film_art_b147855a-61dd-49c3-a519-fcddc59fb2ff_1200x.jpg?v=1613590673'
  },
  {
    id: uuidv4(),
    name: 'Mulan',
    details: `One of Disney's Best`,
    genre: 'Family',
    posterUrl:
      'https://i.pinimg.com/originals/14/7b/0a/147b0a8d61aac202c37704ebe8d8e2c6.jpg'
  }
];

app.use('/movies', moviesRouter);
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => {
  console.log('Server is running');
});
