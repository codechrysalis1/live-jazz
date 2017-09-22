const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/facebook',
  passport.authenticate('facebook')
);

router.get('/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/login/error' }),
  function (req, res) {
    console.log('return user', req.user);
    res.redirect('/');
  }
);

module.exports = router;
