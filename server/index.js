// 📦 Modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/database');

// 📨 Load Config
dotenv.config({ path: './config/config.env' });

// 🎫 Passport Config
// require('./config/passport-local-strategy')(passport, (email) =>
//   users.find((user) => user.email === email)
// );
// require('./config/passport-local-strategy')(passport);
require('./config/passport-google-strategy')(passport);

// 🔥 Launch app
connectDB();
const app = express();

// 🧮 Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// 🌀 Flash middleware

// 📑 Session middlewares
app.use(
  session({
    secret: 'liberator',
    resave: false,
    saveUninitialized: false,
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    // cookie: { secure: true } it doesnt work without https
  })
);
// 🎫 Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// 🏳‍🌈 Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/api/user'));
// app.use('/auth', require('./routes/auth-google'));
// app.use('/artworks', require('./routes/artworks'));

// Endpoints
app.get('/', (req, res) => {
  res.status(200).send('Here is the server...');
});

// 🙉 Listen $PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
