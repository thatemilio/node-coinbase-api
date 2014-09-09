var should = require("should");


module.exports = function(keys) {

    var coinbase = require("../../lib/index.js")(keys);

    describe("#buttons", function() {
  
        describe(".create({}, cb)", function() {
            it("should return `success` as true", function(done) {
                coinbase.buttons.create({
                    button: {
                        name: "test",
                        type: "buy_now",
                        subscription: false,
                        price_string: "1.23",
                        price_currency_iso: "USD",
                        callback_url: "http://example.com/my_custom_callback",
                        description: "The description.",
                        style: "custom_large",
                        include_email: false
                    }
                }, function(err, json) {
                    should.not.exist(err);
                    json.should.have.property("success", true);
                    done();
                });
            });
        });


        describe(".createOrder(code, cb)", function() {
            it("should return `success` as true");
        });
  
  });

};
