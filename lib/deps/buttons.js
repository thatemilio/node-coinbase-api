var _req = require("./req.js");


module.exports = function(api_key) {

    return {
      
      create: function(data, cb) {
    
        if (!api_key) throw new Error("coinbase-api requires your API key.");

        data["api_key"] = api_key;

        _req("POST", "/buttons", data, cb);

      },


      createOrder: function(code, cb) {

        if (!api_key) throw new Error("coinbase-api requires your API key.");

        var data = { "api_key": api_key };

        _req("POST", "/buttons/" + code + "/create_order", data, cb);

      }
    
    };

};

