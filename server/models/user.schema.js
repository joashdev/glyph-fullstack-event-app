const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = model('User', UserSchema, 'users');

module.exports = User;
