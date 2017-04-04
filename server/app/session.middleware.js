var session = require('express-session');
var router = require('express').Router();

router.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'tongiscool', // or whatever you like
  // these options are recommended and reduce session concurrency issues
  resave: false,
  saveUninitialized: false
}));

router.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

module.exports = router;