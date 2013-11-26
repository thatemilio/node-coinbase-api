var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(api_key) {

    return function(data, cb) {
    
        if (!api_key) throw new Error("coinbase-api requires your API key.");

        if (arguments.length === 2) {
        
            data["api_key"] = api_key;

            _req("GET", "/addresses?" + querystring.stringify(data), cb);
        
        } else {
        
            var cb = data;

            _req("GET", "/addresses?api_key=" + api_key, cb);
        
        }
    
    };

};

