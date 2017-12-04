var express = require('express');
var config = require('./config.json');
var router = express.Router();

router.get('/', function(req, res, next) {

    var spinitron = require('spinitron-spinpapi');

    spinitron = new spinitron({
                    station: config.station,
                    userid: config.userid,
                    secret: config.secret
            });
    spinitron.getRegularShowsInfo({ When: 'now' }, function (error, response) {
    console.log(response.results[0].ShowName); 
    
     });
});

module.exports = router;