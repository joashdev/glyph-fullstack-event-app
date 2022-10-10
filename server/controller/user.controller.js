const User = require('../models/user.schema.js');

// CREATE
exports.create = async (req, res) => {
  const error = new Error();
  try {
    if (!req.body) {
      error.status = 400;
      error.message = 'Bad Request. Request body cannot be empty.';
      throw error;
    }
    const newUser = new User({ name: req.body.name });
    const user = await newUser.save();
    if (!user) {
      error.status = 500;
      error.message = 'Something went wrong while creating user.';
      throw error;
    }
    res.status(200).json(user);
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ message: err.message || 'Something went wrong.' });
  }
};

// READ ALL
exports.getAll = async (req, res) => {
  try {
    let allUsers = await User.find({});
    if (!allUsers) {
      res.status(204).json([]);
    }
    res.status(200).json(allUsers);
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ message: err.message || 'Something went wrong.' });
  }
};

// READ SPECIFIC
exports.get = async (req, res) => {
  const error = new Error();

  try {
    if (!req.params.id) {
      error.status = 400;
      error.message = 'Bad Request. User ID not provided.';
      throw error;
    }
    let user = await User.findById({ _id: req.params.id });
    if (!user) {
      res.status(204).send({});
    }
    res.status(200).json(user);
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ message: err.message || 'Something went wrong.' });
  }
};
