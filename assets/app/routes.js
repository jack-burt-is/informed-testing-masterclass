var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('login')
})

router.post('/', function(req, res) {

  let passwordErr, emailErr;

  if (!req.body.password) {
    passwordErr = "Enter a password";
  }

  if (!req.body.email || !req.body.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    emailErr = "Enter a valid email address"
  }

  if (emailErr || passwordErr) {
    var viewModel = {
      emailError: emailErr,
      passwordError: passwordErr,
      email: req.body.email
    };
    res.render('login', viewModel);
  } else {
    var viewModel = {
      email: req.body.email
    }
    res.render('login-success', viewModel);
  }

})

module.exports = router
