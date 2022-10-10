const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timestart: {
    type: Date,
    required: true,
  },
  timeend: {
    type: Date,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Event = model('Event', EventSchema, 'events');

module.exports = Event;
