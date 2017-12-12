var express = require('express');
var router = express.Router();
var stripe = require("stripe")("");

// Using token returned from Stripe process transaction
router.post('/', function(req, res, next){
    var tokenid = req.body.id;

    stripe.charges.create({
        amount: 1000,
        currency: "usd",
        description: "Posting transaction to the card",
        source: tokenid,
    }, function(err, charge) {
        if(err){ 
            console.log("There was an error making the charge");
            console.log(err.message);
        }else{
            res.send('Transaction has been processed');
        }
    });
});

module.exports = router;