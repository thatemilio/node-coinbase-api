var should = require("should");


module.exports = function(keys) {

    var coinbase = require("../../lib/index.js")(keys);

    describe("#paymentMethods", function() {
    
        describe("(cb)", function() {
            it("should return an array of payment_methods", function(done) {
                coinbase.paymentMethods(function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("payment_methods");
                    done();
                });
            });
        });
    
    });

};
