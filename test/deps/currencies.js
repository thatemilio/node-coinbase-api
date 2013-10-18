var should = require("should");


module.exports = function(apiKey) {

    var coinbase = require("../../lib/index.js")(apiKey);

    describe("#currencies", function() {

        describe(".list(cb)", function() {
            it("should return a list of currencies", function(done) {
                coinbase.currencies.list(function(err, json) {
                    should.not.exist(err);
                    json.length.should.be.above(1);
                    done();
                });
            });
        });


        describe(".exchangeRates(cb)", function() {
            it("should return a list of exchange rates", function(done) {
                coinbase.currencies.exchangeRates(function(err, json) {
                    should.not.exist(err);
                    json.should.not.be.empty;
                    done();
                });
            });
        });

    });

};

