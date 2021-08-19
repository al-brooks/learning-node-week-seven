const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  res.render('trips', { allTrips: trips });
});

router.post('/add-trip', (req, res) => {
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

router.post('/delete-trip', (req, res) => {
  const tripId = req.body.tripId;

  trips = trips.filter((trip) => {
    return trip.id != tripId;
  });

  res.redirect('/trips');
});

module.exports = router; // router is available globally
