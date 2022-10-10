const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// const { PORT, mongoUri } = require('./config');
require('dotenv').config({ path: '.env' });

const app = express();

app.use(cors());
app.use(express.json());

// root route
app.get('/', (req, res) => {
  res.status(200).send({ message: 'You made it!' });
});

require('./routes/user.route.js')(app);
require('./routes/event.route.js')(app);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB database Connected...'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () =>
  console.log(`App listening at http://localhost:${process.env.PORT}`)
);
