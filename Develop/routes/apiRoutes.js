const fb = require('express').Router();
const {createNew, readAndWrite} = require('../lib/notes');
const { v4: uuidv4 } = require('uuid');
const {notes} = require('../db/db.json');


// display notes
fb.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

fb.post('/notes', (req, res) => {
  req.body.id = uuidv4();
  const newNote = createNew(req.body, notes);
  res.json(newNote);
});

fb.delete("/notes/:id" , (req, res) => {
  const params = req.params.id
  readAndWrite(params, notes);
  res.redirect('');
});

module.exports = fb;
