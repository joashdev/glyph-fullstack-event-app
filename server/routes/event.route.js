module.exports = (app) => {
  const { Router } = require('express');
  const event = require('../controller/event.controller.js');

  let router = Router();

  // CREATE Event
  router.post('/', event.create);

  // READ ALL Events
  router.get('/', event.getAll);

  // READ SPECIFIC Event
  router.get('/:id', event.get);

  // UPDATE SPECIFIC Event
  router.post('/:id', event.update);

  // DELETE SPECIFIC Event
  router.delete('/:id', event.delete);

  app.use('/api/events', router);
};
