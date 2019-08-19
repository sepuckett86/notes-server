const { Router } = require('express');
const Note = require('../models/Note');


module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      text
    } = req.body;

    Note
      .create({
        text
      })
      .then(note => res.send(note))
      .catch(next);
  });
