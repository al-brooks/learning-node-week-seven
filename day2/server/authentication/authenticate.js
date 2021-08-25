const authenticate = (req, res, next) => {
  if (req.session) {
    if (req.session.username) {
      next();
    } else {
      res.render('login', { message: 'Log in to continue' });
    }
  } else {
    res.render('login', { message: 'Log in to continue' });
  }
};

module.exports = authenticate;
