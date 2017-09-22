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

router.get('/user', (req, res) => {
  res.json(req.user);
})

router.get('/logout',
  function (req, res) {
    req.logout();
    res.redirect('/');
  }
);

module.exports = router;
