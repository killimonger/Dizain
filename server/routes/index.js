const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const Artwork = require('../models/Artwork');

//@desc Login/Landing page
//@route GET /
router.get('/user', (req, res) => {
  res.status(200).json('Hello World bro');
});
router.get('/q', ensureGuest, (req, res) => {
  // res.render('login', {
  //   layout: 'login',
  // });
  res.send('You should loggin before accessing the plateform');
});

//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    // const artworks = await Artwork.find({ user: req.user.id }).lean();
    // lean() transform Mongoose document in plain javascript object

    // res.render('dashboard', {
    //   name: req.user.firstName,
    //   articles,
    // });
    res.send(
      `This is the dashboard of : ${req.user.firstName}, user N*${req.user.id} !`
    );
  } catch (err) {
    console.log(err);
    // res.render('error/500');
    res.send('error/500 occured');
  }
});

module.exports = router;
