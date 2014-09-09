var should = require("should");


module.exports = function(keys) {

    describe("#account", function() {

        var coinbase = require("../../lib/index.js")(keys);

        describe(".balance(cb)", function() {
            it("should return `amount` and `currency`", function(done) {
                coinbase.account.balance(function(err, json) {
                    should.not.exist(err);
                    json.should.have.properties(["amount", "currency"]);
                    done();
                });
            });
        });


        describe(".receiveAddress(cb)", function() {
            it("should return your Bitcoin receive address", function(done) {
                coinbase.account.receiveAddress(function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("success", true);
                    done();
                });
            });
        });


        describe(".generateReceiveAddress({}, cb)", function() {
            it("should return a new receive address", function(done) {
                coinbase.account.generateReceiveAddress({ address: { label: "That account" } }, function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("success", true);
                    done();
                });
            });
        });


        describe(".generateReceiveAddress(cb)", function() {
            it("should return a new receive address", function(done) {
                coinbase.account.generateReceiveAddress(function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("success", true);
                    done();
                });
            });
        });

    });

};
