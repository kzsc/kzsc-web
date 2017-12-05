var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
      id: 1,
      username: "Sam"
    }, {
      id: 2,
      username: "Oscar"
    }]);
});

module.exports = router;
