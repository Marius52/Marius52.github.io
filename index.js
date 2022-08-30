const express = require('express');
const fs = require("fs");
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: "*"}})
const d = new Date();

app.use(express.static("Public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});