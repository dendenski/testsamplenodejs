'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const mssql = require('mssql');
const session = require('express-session');
const cheerio = require("cheerio");
const fs = require('fs');


const app = express();
const router = express.Router();
router.get('/', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write('<h1>Hello from Express.js!</h1>');
  // res.end();
  res.sendFile(path.join(__dirname + '../login.html'));
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../login.html')));

module.exports = app;
module.exports.handler = serverless(app);
