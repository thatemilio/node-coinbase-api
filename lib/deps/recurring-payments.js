var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(keys) {

    return {
    
        list: function(data, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            if (arguments.length === 2) {
            
                _req("GET", "/recurring_payments?" + querystring.stringify(data), { keys: keys }, cb);
            
            } else {
            
                var cb = data;

                _req("GET", "/recurring_payments", { keys: keys }, cb);
            
            }

        },


        get: function(id, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("GET", "/recurring_payments/" + id, { keys: keys }, cb);

        }
    
    };

};

