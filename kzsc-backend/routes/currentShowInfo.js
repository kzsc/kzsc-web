var express = require('express');
var config = require('./config.json');
var router = express.Router();
// https://www.npmjs.com/package/spinitron-spinpapi
var spinitron = require('spinitron-spinpapi');

// TODO
// Cache the result returned from the request
// Send the cached result to the client side

// Current bug
// When the request is made more than once it creates a 500 internal server error

router.get('/', function(req, res, next) {

  spinitron = new spinitron({
    station: config.station,
    userid: config.userid,
    secret: config.secret
  });

  spinitron.getShowInfo(function (error, response) {
    console.log(response.results);
    res.send(response.results);
  });
});

module.exports = router;
