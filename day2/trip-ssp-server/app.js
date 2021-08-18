const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

// using uuid
const { v4: uuidv4 } = require('uuid');

const PORT = 3000;

// Set express to parse body
app.use(express.urlencoded({ extended: true }));

// Set mustache as template engine
app.engine('mustache', mustacheExpress());

// Pages are in the views folder
app.set('views', './views');

// Pages extension
app.set('view engine', 'mustache');

let trips = [
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

// passes | Root Page
app.get('/', (req, res) => {
  let greeting = 'Welcome to my Trips App';
  res.render('index', { greeting: greeting });
});

// passes | View all trips
app.get('/trips', (req, res) => {
  res.render('trips', { allTrips: trips });
});

// passes | Trips api
app.get('/api/trips', (req, res) => {
  res.json(trips);
});

// passes | Add trips page
app.get('/add-trip', (req, res) => {
  res.render('add-trip');
});

// passes  Add Trips
app.post('/add-trip', (req, res) => {
  const title = req.body.tripTitle;
  const dateOfDeparture = req.body.tripDateOfDeparture;
  const dateOfReturn = req.body.tripDateOfReturn;

  const trip = {
    id: uuidv4(),
    title: title,
    image: 'insert image later',
    dateOfDeparture: dateOfDeparture,
    dateOfReturn: dateOfReturn
  };

  trips.push(trip);

  res.redirect('/trips');
});

app.post('/delete-trip', (req, res) => {
  const tripId = req.body.tripId;

  trips = trips.filter((trip) => {
    return trip.id != tripId;
  });

  res.redirect('/trips');
});

app.listen(PORT, () => {
  console.log('Server is running...');
});
