const { recommendDestination, generateItinerary } = require('../services/recommendationEngine');
const User = require('../models/userModel');

exports.getItinerary = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = await User.findByPk(userId);
    const travelMates = []; // Add logic to fetch travel mates data
    
    const destination = recommendDestination(userData, travelMates);
    const itinerary = generateItinerary(destination, userData);
    
    res.json({ destination, itinerary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
