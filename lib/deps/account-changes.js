var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(api_key) {

    return function(data, cb) {

        if (arguments.length === 2) {
        
            data["api_key"] = api_key;

            _req("GET", "/account_changes?" + querystring.stringify(data), cb);
        
        } else {
        
            var cb = data;

            _req("GET", "/account_changes?api_key=" + api_key, cb);
        
        }
    
    };

};
