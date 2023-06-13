const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const models = require('../models/models');

// Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

// Handle Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Retrieve the user from the database based on the username
  const user = await models.User.findOne({ where: { username } });

  // Check if the user exists and the password matches
  if (user && bcrypt.compareSync(password, user.password)) {
    // If Login is Successful, send to Users Dashboard
    res.redirect('/dashboard');
  } else {
    // If Login is Invalid send back to Login page
    res.redirect('/login');
  }
});

// Dashboard page route
router.get('/dashboard', async (req, res) => {
  // Retrieve User Info. and Blog Post
  const user = await models.User.findOne({
    where: { username: req.session.username },
    include: [{ model: models.BlogPost }],
  });

  res.render('dashboard', { user });
});

// Home page route
router.get('/', async (req, res) => {
  // Retrieve Recent Blog Post
  const recentPost = await models.BlogPost.findOne({
    order: [['createdAt', 'DESC']],
  });

  res.render('home', { recentPost });
});

// Logout route
router.get('/logout', (req, res) => {

  res.redirect('/login');
});

module.exports = router;
