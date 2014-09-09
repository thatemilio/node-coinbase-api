var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(keys) {

    return {
    
        list: function(data, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            if (arguments.length === 2) {
            
                _req("GET", "/transactions?" + querystring.stringify(data), { keys: keys }, cb);
            
            } else {
            
                _req("GET", "/transactions", { keys: keys }, cb);
            
            }

        },


        get: function(id, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("GET", "/transactions/" + id, { keys: keys }, cb);

        },


        sendMoney: function(data, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("POST", "/transactions/send_money", { keys: keys, data: data }, cb);

        },


        requestMoney: function(data, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("POST", "/transactions/request_money", { keys: keys, data: data }, cb);

        },


        resendRequest: function(id, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("PUT", "/transactions/" + id + "/resend_request", { keys: keys }, cb);

        },


        cancelRequest: function(id, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("DELETE", "/transactions/" + id + "/cancel_request", { keys: keys }, cb);

        },


        completeRequest: function(id, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("PUT", "/transactions/" + id + "/complete_request", { keys: keys }, cb);

        }
    
    };

};

