var express = require('express');
var app = express();

var products = [
    {id:1, name:"Twix", price:2.9},
    {id:2, name:"Snickers", price:2.5},
    {id:3, name:"Daim", price:3.2}
];
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/products', function(req, res){
    if(req.query.id){
        var match = null;

        for(var i = 0,len = products.length; i < len; i++){
            if(String(products[i].id) === String(req.query.id)){
                match = products[i];
                break;
            }
        }

        if(match){
            res.send(match);
        } else {
            res.send("Ain't no product with that id.");
        }
    } else {
        res.send(products);
    }
});
 
app.listen(3000);