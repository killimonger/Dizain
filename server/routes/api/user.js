const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../../middleware/auth');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

const users = [];

router.get('/', async (req, res) => {
  res.status(200).json('Hello World bro users');
});
router.post('/n', async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
    });
    res.status(200).json('We got it');
    console.log(users);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
