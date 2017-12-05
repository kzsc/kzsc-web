var express = require('express');
var router = express.Router();
var stripe = require("stripe")("");

router.get('/', function(req, res, next){
    console.log("Inside Payment method");
    res.send("Data was returned back")
    // var token = request.body.stripeToken;
    
    // stripe.charges.create({
    //     amount: 1,
    //     currency: "usd",
    //     description: "Example charge",
    //     source: token,
    // }, function(err, charge) {
    //     console.log("Callback function called");
    //     console.log(Charge); 
    //     // asynchronously called
    // });
});

module.exports = router;