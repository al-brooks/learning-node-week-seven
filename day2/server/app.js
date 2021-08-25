const PORT = 3000;
const express = require('express');
const app = express();
require('dotenv').config();
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const authenticate = require('./authentication/authenticate');
const tripsRouter = require('./routers/trips');
const userRouter = require('./routers/user');

// Set express to parse body
app.use(express.urlencoded({ extended: true }));

// Set session middleware
app.use(
  session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: true,
    resave: true
  })
);

// Set trip router - authenticate entire router
app.use('/trips', authenticate, tripsRouter);

// Set user router - authenticate specific routes
app.use('/user', userRouter);

// Set static resources - for css styling and async js requests
app.use(express.static('static-resources'));

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

global.users = [
  { username: 'testuser1', password: 'test1' },
  { username: 'testuser2', password: 'test2' }
];

// Root Page
app.get('/', (req, res) => {
  res.render('index');
});

// Trips api
app.get('/api/trips', (req, res) => {
  res.json(trips);
});

app.listen(PORT, () => {
  console.log('Server is running...');
});
