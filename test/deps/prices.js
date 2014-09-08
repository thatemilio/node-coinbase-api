var should = require("should");


module.exports = function(apiKey) {

    var coinbase = require("../../lib/index.js")(apiKey);

    describe("#prices", function() {
    
        describe(".buy(cb)", function() {
            it("should return total buy price", function(done) {
                coinbase.prices.buy(function(err, json) {
                    should.not.exist(err);
                    json.should.not.be.empty;
                    done();
                });
            });
        });


        describe(".buy({}, cb)", function() {
            it("should return total buy price", function(done) {
                coinbase.prices.buy({ qty: 30 }, function(err, json) {
                    should.not.exist(err);
                    json.should.not.be.empty;
                    done();
                });
            });
        });


        describe(".sell(cb)", function() {
            it("should return total sell price", function(done) {
                coinbase.prices.sell(function(err, json) {
                    should.not.exist(err);
                    json.should.not.be.empty;
                    done();
                });
            });
        });


        describe(".sell({}, cb)", function() {
            it("should return total sell price", function(done) {
                coinbase.prices.sell({ qty: 10 }, function(err, json) {
                    should.not.exist(err);
                    json.should.not.be.empty;
                    done();
                });
            });
        });


        describe("spotRate(cb)", function() {
            it("should return spot price", function(done) {
                coinbase.prices.spotRate(function(err, json) {
                    should.not.exist(err);
                    json.should.have.properties("amount", "currency");
                    done();
                });
            });
        });


        describe("spotRate({}, cb)", function() {
            it("should return spot price", function(done) {
                coinbase.prices.spotRate({ currency: "ALL" }, function(err, json) {
                    should.not.exist(err);
                    json.should.have.properties("amount", "currency");
                    done();
                });
            });
        });
    
    });

};

