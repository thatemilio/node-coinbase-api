var should = require("should");


module.exports = function(keys) {

    var coinbase = require("../../lib/index.js")(keys);

    describe("#oauth", function() {
    
        describe(".list({}, cb)", function() {
            it("should return an array of OAuth applications.", function(done) {
                coinbase.oauth.list({ page: 2 }, function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("current_page", 2);
                    done();
                });
            });
        });


        describe(".list(cb)", function() {
            it("should return an array of OAuth applications.", function(done) {
                coinbase.oauth.list(function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("current_page", 1);
                    done();
                });
            });
        });


        describe(".get(id, cb)", function() {
            it("should return an application object.");
        });


        describe(".create(data, cb)", function() {
            it("should return `success` as true");
        });
    
    });

};
