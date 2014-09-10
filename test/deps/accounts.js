var should = require("should");


module.exports = function(keys) {

    var coinbase = require("../../lib/index")(keys);

    describe("#accounts", function() {
    
        describe(".list({}, cb)", function() {
            it("should return an array of accounts", function(done) {
                coinbase.accounts.list({ page: 2 },  function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("current_page", 2);
                    done();
                });
            });
        });


        describe(".list(cb)", function() {
            it("should return an array of accounts.", function(done) {
                coinbase.accounts.list(function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("current_page", 1);
                    done();
                });
            });
        });


        describe(".balance(id, cb)", function() {
            it("should return the balance of the requested ID.");
        });


        describe(".create({}, cb)", function() {
            it("should return `success` as true");
        });


        describe(".update(id, {}, cb)", function() {
            it("should return `success` as true");
        });


        describe(".primary(id, cb)", function() {
            it("should return `success` as true");
        });


        describe(".del(id, cb)", function() {
            it("should return `success` as true");
        });
    
    });

};
