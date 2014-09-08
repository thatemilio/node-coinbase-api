var should = require("should");


module.exports = function(api_key) {

    var coinbase = require("../../lib/index.js")(api_key);

    describe("#tokens", function() {
    
        describe(".create(cb)", function() {
            it("should return a bitcoin token", function(done) {
                coinbase.tokens.create(function(err, json) {
                    should.not.exist(err);
                    json.should.have.properties("success", "token");
                    done();
                });
            });
        });
    
    });

};

