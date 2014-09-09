var _req = require("./req.js");


module.exports = function(keys) {

    return {
      
      create: function(data, cb) {
    
        if (!keys) throw new Error("coinbase-api requires your API keys.");

        _req("POST", "/buttons", { keys: keys, data: data }, cb);

      },


      createOrder: function(code, cb) {

        if (!keys) throw new Error("coinbase-api requires your API keys.");

        _req("POST", "/buttons/" + code + "/create_order", { keys: keys }, cb);

      }
    
    };

};

