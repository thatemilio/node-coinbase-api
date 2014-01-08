var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function() {

    return {

        buy: function(data, cb) {

            if (arguments.length === 2) {
            
                _req("GET", "/prices/buy?" + querystring.stringify(data), cb);
            
            } else {
            
                var cb = data;

                _req("GET", "/prices/buy", cb);
            
            }

        },


        sell: function(data, cb) {

            if (arguments.length === 2) {
            
                _req("GET", "/prices/sell?" + querystring.stringify(data), cb);
            
            } else {

                var cb = data;
            
                _req("GET", "/prices/sell", cb);
            
            }

        },


        spotRate: function(data, cb) {

            if (arguments.length === 2) {
            
                _req("GET", "/prices/spot_rate?" + querystring.stringify(data), cb);
            
            } else {
            
                var cb = data;

                _req("GET", "/prices/spot_rate", cb);
            
            }

        },


        historical: function(page, cb) {

          if (arguments.length === 2) {
          
            _req("GET", "/prices/historical?page=" + page, cb);
          
          } else {
          
            var cb = page;

            _req("GET", "/prices/historical", cb);
          
          }

        }

    };

};

