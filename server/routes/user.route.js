module.exports = (app) => {
  const { Router } = require('express');
  const user = require('../controller/user.controller.js');

  let router = Router();

  // CREATE User
  router.post('/', user.create);

  // READ ALL User
  router.get('/', user.getAll);

  // READ SPECIFIC User
  router.get('/:id', user.get);

  app.use('/api/users', router);
};
