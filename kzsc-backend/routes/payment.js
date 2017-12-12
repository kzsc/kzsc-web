var express = require('express');
var router = express.Router();
var config = require('./config.json');
var stripe = require("stripe")(config.stripe_key);

// Using token returned from Stripe process transaction
router.post('/', function(req, res, next){
    var tokenid = req.body.rtoken.id;
    var damount = req.body.amount;

    stripe.charges.create({
        amount: damount,
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