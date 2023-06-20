var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('first-page')
})

router.get('/startform', function (req, res) {
  res.render('first-page')
})

router.get('/entername', function (req, res) {
  res.render('second-page')
})

router.get('/namesubmitted', function (req, res) {
  res.render('third-page')
})

router.post('/entername', function(req, res) {

  if (req.body.name.length < 5) {
    var viewModel = {
      errorMessages: "Your name is too short..."
    };
    res.render('second-page', viewModel);
  } else {
    res.render('third-page');

    // insert the data into the database
  }

})

// add your routes here

module.exports = router
