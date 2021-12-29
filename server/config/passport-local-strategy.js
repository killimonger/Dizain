const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

module.exports = function (passport, getUserByEmail) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }),
    async (email, password, done) => {
      const user = getUserByEmail(email);
      if (user == null) {
        return done(null, false, { message: 'No user with that email' });
      }
      try {
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Password Incorrect' });
        }
      } catch (error) {
        return done(error);
      }
    }
  );

  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
};
