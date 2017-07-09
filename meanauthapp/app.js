// bring in the application variables
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');

// initialize the application
var app = express();

var user = require('./routes/users');

app.use(cors());

// body parser middlewarwe
app.use(bodyParser.json());

// Index route
app.get('/', function (req, res) {
    res.send('Homepage!');
})

// start server
app.listen('3000', function () {
    console.log('MEAN Auth app has started!');
});