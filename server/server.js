'use strict';

const PORT = 3005;

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'You made it!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
