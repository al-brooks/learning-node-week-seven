const PORT = 3000;
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const { v4: uuidv4 } = require('uuid');

// Set express to parse body
app.use(express.urlencoded({ extended: true }));

// Set routers
const tripsRouter = require('./routes/trips');
app.use('/trips', tripsRouter);

// Set mustache as template engine
app.engine('mustache', mustacheExpress());
app.set('views', './pages');
app.set('view engine', 'mustache');

// hardcoded trips - for testing
global.trips = [
  {
    id: uuidv4(),
    title: 'Chicago',
    image: 'insert image later',
    dateOfDeparture: '01/01/2021',
    dateOfReturn: '01/11/2021'
  },
  {
    id: uuidv4(),
    title: 'Washington D.C.',
    image: 'insert image later',
    dateOfDeparture: '02/01/2021',
    dateOfReturn: '02/11/2021'
  },
  {
    id: uuidv4(),
    title: 'New York',
    image: 'insert image later',
    dateOfDeparture: '03/01/2021',
    dateOfReturn: '03/11/2021'
  }
];

// Root Page
app.get('/', (req, res) => {
  let greeting = 'Welcome to my Trips App';
  res.render('index', { greeting: greeting });
});

// Trips api
app.get('/api/trips', (req, res) => {
  res.json(trips);
});

app.listen(PORT, () => {
  console.log('Server is running...');
});
