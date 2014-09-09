var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(keys) {

    return function(data, cb) {

        if (!keys) throw new Error("coinbase-api requires your API keys.");

        if (arguments.length === 2) {
        
            _req("GET", "/account_changes?" + querystring.stringify(data), { keys: keys }, cb);
        
        } else {
        
            var cb = data;

            _req("GET", "/account_changes", { keys: keys }, cb);
        
        }
    
    };

};

