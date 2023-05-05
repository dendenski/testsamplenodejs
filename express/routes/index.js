var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join(__dirname, '../public')));

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});