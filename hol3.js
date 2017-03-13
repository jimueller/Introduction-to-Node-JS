var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// to support JSON-encoded request bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var products = [
    {id: 1, name: "Twix", price: 2.9},
    {id: 2, name: "Snickers", price: 2.5},
    {id: 3, name: "Daim", price: 3.2}
];

function getProductById(id) {
    var matches = products.filter(function (product) {
        return (product.id == id);
    });

    return matches[0];
}

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/products', function (req, res) {
    if (req.query.id) {
        var product = getProductById(req.query.id);

        if (product) {
            res.send(product);
        } else {
            res.sendStatus(404);
        }
    } else {
        res.send(products);
    }
});

app.post('/products', function (req, res) {
    var product = req.body;
    var id = product.id;
    products.push(product);

    res.send(getProductById(id));
});

app.delete('/products', function (req, res) {
    var id = req.query.id;
    products = products.filter(function (product) {
       return product.id != id;
    });

    res.send(products);
});

app.listen(3000);