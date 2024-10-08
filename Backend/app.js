const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/dbConfig');
const itineraryRoutes = require('./routes/itineraryRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', itineraryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server running on port ${PORT}`);
});
