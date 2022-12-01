const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Insider Profile' });
});

/* GET Register page. */
router.get('/register', (req, res, next) => {
  res.render('register', { title: 'Insider Register' });
});

router.post('/register', (req, res) => {
  // Create a user object to save, using values from incoming JSON
  const newUser = new User({
    username: req.body.username,
    idUser: req.body.idUser,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  // Save, via passport's "register" method, the user
  User.register(newUser, req.body.password, (err, user) => {
    // If there's a problem, send back a JSON object with the error
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }
    // Otherwise, for now, send back a JSON object with the new user's info
    return res.send(JSON.stringify(user));
  });
});

/* GET home page. */
router.get('/signin', (req, res, next) => {
  res.render('signin', { title: 'Insider Signin' });
});

module.exports = router;
