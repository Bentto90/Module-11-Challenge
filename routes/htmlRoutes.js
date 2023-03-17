const path = require("path");
const fb = require('express').Router();

fb.get('/', (req, res) => {
  req.sendFile(path.join(__dirname, '../public/index.html'));
});

fb.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

fb.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = fb;