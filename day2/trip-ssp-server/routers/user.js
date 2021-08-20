const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const authenticate = require('../authentication/authenticate');

router.get('/', authenticate, (req, res) => {
  const username = req.session.username;
  res.render('useraccount', { username: username });
});

router.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = { username: username, password: password };
  users.push(user);

  // session
  req.session.username = username;
  res.redirect('/user');
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const authUser = users.find((user) => {
    return user.username == username && user.password == password;
  });

  if (authUser) {
    req.session.username = authUser.username;
    res.redirect('/user');
  } else {
    res.render('login', {
      errorMessage: 'Username or password is incorrect'
    });
  }
});

router.post('/signout', (req, res) => {
  req.session.destroy((error) => {
    res.redirect('/');
  });
});

module.exports = router;
