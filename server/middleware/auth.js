module.exports = {
  // Check if the user  is authenticated / connected
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/');
    }
  },
  // User already logged in dont have access to login page
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      // res.redirect('/dashboard');
      res.send('Redirecte to ... /dashboard');
    } else {
      return next();
    }
  },
};
