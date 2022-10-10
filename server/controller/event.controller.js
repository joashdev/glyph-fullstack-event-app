const Event = require('../models/event.schema.js');
const inTimeRange = require('../utils/inTimeRange');

// CREATE
exports.create = async (req, res) => {
  const error = new Error();
  try {
    // ensure that req.body is present
    if (
      !req.body ||
      !req.body.name ||
      !req.body.description ||
      !req.body.timestart ||
      !req.body.timeend ||
      !req.body.users
    ) {
      error.status = 400;
      error.message = 'Bad Request. Request body cannot be empty.';
      throw error;
    }

    const { name, description, timestart, timeend, users } = req.body;

    //validate users array in request
    if (users.length < 1 || users.length > 10) {
      error.status = 400;
      error.message = 'Bad Request. 1-10 users must be tagged in an event.';
      throw error;
    }

    // check timestamp for
    //    - start < end
    //    - same date
    //    - within 8am to 8pm
    if (
      new Date(timestart) >= new Date(timeend) ||
      new Date(timestart).toLocaleDateString() !==
        new Date(timeend).toLocaleDateString() ||
      !inTimeRange(timestart) ||
      !inTimeRange(timeend)
    ) {
      error.status = 400;
      error.message = 'Bad Request. Improper event start and end time.';
      throw error;
    }

    // check conflict of events on database
    const eventConflict = await Event.findOne({
      timestart: { $lt: new Date(timeend) },
      timeend: { $gt: new Date(timestart) },
    });
    if (eventConflict) {
      console.log({ eventConflict });
      error.status = 400;
      error.message = 'Bad Request. Results in event overlap.';
      throw error;
    }

    // otherwise save it to database
    const newEvent = new Event({
      name,
      description,
      timestart: new Date(timestart),
      timeend: new Date(timeend),
      users,
    });
    const event = await newEvent.depopulate('users').save();
    if (!event) {
      error.status = 500;
      error.message = 'Something went wrong.';
      throw error;
    }
    res.status(200).json(event);
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ message: err.message || 'Something went wrong.' });
  }
};

// READ ALL
exports.getAll = async (req, res) => {
  try {
    let allEvents = await Event.find({})
      .sort({ timestart: 1 })
      .populate('users');
    if (!allEvents) {
      res.status(204).json([]);
    }
    res.status(200).json(allEvents);
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
      error.message = 'Bad Request. Event ID not provided.';
      throw error;
    }
    let event = await Event.findById({ _id: req.params.id });
    if (!event) {
      res.status(204).send({});
    }
    res.status(200).json(event);
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ message: err.message || 'Something went wrong.' });
  }
};

// UPDATE
exports.update = async (req, res) => {
  const error = new Error();
  try {
    if (
      !req.params.id ||
      !req.body ||
      !req.body.name ||
      !req.body.description ||
      !req.body.timestart ||
      !req.body.timeend ||
      !req.body.users
    ) {
      error.status = 400;
      error.message = 'Bad Request. Ensure that ID and Event is provided.';
      throw error;
    }

    const { name, description, timestart, timeend, users } = req.body;

    // depopulate users
    users.forEach((user) => {
      return delete user['name'];
    });

    Event.findByIdAndUpdate(
      { _id: req.params.id },
      { name, description, timestart, timeend, users },
      { returnDocument: 'after' },
      async (err, event) => {
        if (!event) {
          res.status(400).send({ message: 'Event not found' });
          // return;
        } else {
          res.status(200).json(await event.populate('users'));
        }
      }
    );
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ message: err.message || 'Something went wrong.' });
  }
};

// DELETE
exports.delete = async (req, res) => {
  const error = new Error();
  try {
    if (!req.params.id) {
      error.status = 400;
      error.message = 'Bad Request. Event ID not provided.';
    }
    Event.findByIdAndDelete({ _id: req.params.id }, (err, event) => {
      if (!event) {
        res.status(500).send({ message: 'Event not found' });
      } else {
        res.status(200).json(event);
      }
    });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ message: err.message || 'Something went wrong.' });
  }
};
