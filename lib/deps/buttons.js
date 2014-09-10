var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(keys) {

    return {
      
      create: function(data, cb) {
    
        if (!keys) throw new Error("coinbase-api requires your API keys.");

        _req("POST", "/buttons", { keys: keys, data: data }, cb);

      },


      createOrder: function(code, cb) {

        if (!keys) throw new Error("coinbase-api requires your API keys.");

        _req("POST", "/buttons/" + code + "/create_order", { keys: keys }, cb);

      },


      orders: function(code, data, cb) {
      
        if (!keys) throw new Error("coinbase-api requires your API keys.");

        if (arguments.length === 3) {

            _req("POST", "/buttons/" + code + "/orders?" + querystring.stringify(data), { keys: keys }, cb);

        } else {

            var cb = data;

            _req("POST", "/buttons/" + code + "/orders", { keys: keys }, cb);

        }
      
      }
    
    };

};

