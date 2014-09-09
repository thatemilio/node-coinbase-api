var _req = require("./req.js");


module.exports = function() {

    return {
    
        list: function(cb) {

            _req("GET", "/currencies", {}, cb);

        },


        exchangeRates: function(cb) {

            _req("GET", "/currencies/exchange_rates", {}, cb);

        }
    
    };

};

