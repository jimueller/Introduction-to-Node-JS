'use strict'
require("colors");

const VAT = 0.2;
var products = [
    {id:1, name:"Twix", price:2.9},
    {id:2, name:"Snickers", price:2.5},
    {id:3, name:"Daim", price:3.2}
]

var accountBalance = 3;

function withdraw(amount, callback){
    if(accountBalance < amount){
        callback("Insufficient funds.");
    } else {
        accountBalance -= amount;
        callback();
    }
}

function calculateVAT(amount){
    return VAT * amount;
}

function buy(product, callback){
    withdraw(product.price, function(err){
        if(err){
            callback(err);
        } else {
            var vat = calculateVAT(product.price);
            
            var successMsg = 'You bought a ' + product.name + ' for $' + product.price +
                             '\nVAT: ' + vat;
            console.log(successMsg.green);
            callback();
        }
    });

}
buy(products[1], function(err){
    if(err){
        console.log(err.red);
    }
    else{
        var balMsg = "Your balance is $" + accountBalance.toFixed(2); 
        console.log(balMsg.blue);
    }
});
