var express = require('express');
var router = express.Router();

// register route, will add automatically /users
router.post('/register', function (req, res, next) {
    res.send('REGISTER!')
});

// authenticate route, will add automatically /users
router.post('/authenticate', function (req, res, next) {
    res.send('authenticate!')
});

// profile route, will add automatically /users
router.get('/profile', function (req, res, next) {
    res.send('profile page!')
});

module.exports = router;