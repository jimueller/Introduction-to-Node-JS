var expect = require('chai').expect;
var request = require('request');
require('../hol3.js');

describe("Get all products", function () {
    var result; // Used to store the result
    // First we call the service
    before(function (done) {
        // Configure the call with content-type and uri
        var options = {
            headers: { "Content-Type": "application/json"},
            uri: 'http://localhost:3000/products',
            json: {}
        };
        // Make call
        request.get(options, function (err, res, body) {
            result = {err, res, body};
            done();
        });

    });
    // Test the result
    it('should execute without errors', function (done) {
        expect(result.err).to.equal(null);
        done();
    });

    it('should return an http status 200', function (done) {
        expect(result.res.statusCode).to.equal(200);
        done();
    });

    it('should return three items', function (done) {
        expect(result.body.length).to.equal(3);
        done();
    })
});

describe("Get product with id = 3", function () {
    var result; // Used to store the result
    // First we call the service
    before(function (done) {
        // Configure the call with content-type and uri
        var options = {
            headers: { "Content-Type": "application/json"},
            uri: 'http://localhost:3000/products?id=3',
            json: {}
        };
        // Make call
        request.get(options, function (err, res, body) {
            result = {err, res, body};
            done();
        });

    });
    // Test the result
    it('should execute without errors', function (done) {
        expect(result.err).to.equal(null);
        done();
    });

    it('should return an http status 200', function (done) {
        expect(result.res.statusCode).to.equal(200);
        done();
    });

    it('should return "Daim"', function (done) {
        expect(result.body.name).to.equal('Daim');
        done();
    })
});

describe("Add one product", function () {
    var result; // Used to store the result
    // First we call the service
    before(function (done) {
        // Configure the call with content-type and uri
        var options = {
            headers: { "Content-Type": "application/json"},
            uri: 'http://localhost:3000/products',
            json: {
                "id": 4,
                "name": "KitKat",
                "price": 8.2
            }
        };
        // Make call
        request.post(options, function (err, res, body) {
            result = {err, res, body};
            done();
        });

    });
    // Test the result
    it('should execute without errors', function (done) {
        expect(result.err).to.equal(null);
        done();
    });

    it('should return an http status 200', function (done) {
        expect(result.res.statusCode).to.equal(200);
        done();
    });

    it('should return id = 4', function (done) {
        expect(result.body.id).to.equal(4);
        done();
    })
});

describe("Delete one product", function () {
    var result; // Used to store the result
    // First we call the service
    before(function (done) {
        // Configure the call with content-type and uri
        var options = {
            headers: { "Content-Type": "application/json"},
            uri: 'http://localhost:3000/products?id=3',
            json: {}
        };
        // Make call
        request.delete(options, function (err, res, body) {
            result = {err, res, body};
            done();
        });

    });
    // Test the result
    it('should execute without errors', function (done) {
        expect(result.err).to.equal(null);
        done();
    });

    it('should return an http status 200', function (done) {
        expect(result.res.statusCode).to.equal(200);
        done();
    });

    it('should return three products', function (done) {
        expect(result.body.length).to.equal(3);
        done();
    })
});