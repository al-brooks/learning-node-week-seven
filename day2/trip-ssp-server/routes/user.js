const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  if (req.session.username) {
    res.render('useraccount', { username: req.session.username });
  } else {
    res.render('login');
  }
});

router.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = { username: username, password: password };
  users.push(user);

  // session
  req.session.username = username;
  res.render('useraccount', { username: username });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const authUser = users.find((user) => {
    return user.username == username && user.password == password;
  });

  if (authUser) {
    if (req.session) {
      req.session.username = authUser.username;
    }

    res.render('useraccount', { username: authUser.username });
  } else {
    res.render('login', { errorMessage: 'Username or password is incorrect' });
  }
});

// router.post('/signout', (req, res) => {

// })

module.exports = router;
