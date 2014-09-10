var should = require("should");


module.exports = function(keys) {

    var coinbase = require("../../lib/index.js")(keys);

    describe("#reports", function() {
    
        describe(".list({}, cb)", function() {
            it("should return an array of reports.", function(done) {
                coinbase.reports.list({ page: 2 }, function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("current_page", 2);
                    done();
                });
            });
        });


        describe(".list(cb)", function() {
            it("should return an array of reports.", function(done) {
                coinbase.reports.list(function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("current_page", 1);
                    done();
                });
            });
        });


        describe(".create({}, cb)", function() {
            it("should return `success` as true");
        });


        describe(".get(id, cb)", function() {
            it("should return a report object");
        });
    
    });

};
