// bring in the application variables
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');

// to avoid the deprecated message 
mongoose.Promise = global.Promise;

// create the database meanauth db with the db connection 
// mongoose.connect('mongodb://localhost/meanauth');
mongoose.connect(config.database);
// mongoose.connect('mongodb://localhost/meanauth');
//  get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('We are connected to DB!' + ' ' + config.database);
});

// initialize the application
var app = express();

// requiring routes
var users = require('./routes/users');

app.use(cors());

// body parser middlewarwe
app.use(bodyParser.json());

// tell nodejs to use the public folder with js and css files.
// old style to use the public directory
// app.use(express.static('public'));
// __dirname is the directory where the app.js application is started from
app.use(express.static(__dirname + '/public'));

// Index route
app.get('/', function (req, res) {
    res.send('Homepage!');
});

// in the users route append /users to the routes
app.use('/users', users);

// start server
app.listen('3000', function () {
    console.log('MEAN Auth app has started!');
});