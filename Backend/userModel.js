const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = sequelize.define('User', {
  user_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  expenses: Sequelize.INTEGER,
  vibe: Sequelize.STRING,
  reviews: Sequelize.TEXT,
  instagram_photos: Sequelize.TEXT,
  previous_destinations: Sequelize.TEXT,
  favorite_activities: Sequelize.TEXT,
});

module.exports = User;
