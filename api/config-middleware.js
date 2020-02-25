const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = {
  name: 'saywhat',
  secret: 'Mums the word',
  cookie: {
    maxAge: 1 * 24 * 60 * 1000 * 7,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: true,
}

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};