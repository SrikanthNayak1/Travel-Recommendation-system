const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/itineraryController');

router.get('/itinerary/:userId', itineraryController.getItinerary);

module.exports = router;
