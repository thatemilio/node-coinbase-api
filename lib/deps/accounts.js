var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(keys) {

    return {
    
        list: function(data, cb) {
        
            if (!keys) throw new Error("coinbase-api requires your API keys.");

            if (arguments.length === 2) {

                _req("GET", "/accounts?" + querystring.stringify(data), { keys: keys }, cb);

            } else {

                var cb = data;

                _req("GET", "/accounts", { keys: keys }, cb);

            }
        
        },

        get: function(id, cb){
            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("GET", "/accounts/" + id, { keys: keys }, cb);
       
        },


        balance: function(id, cb) {
        
            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("GET", "/accounts/" + id + "/balance", { keys: keys }, cb);
        
        },


        create: function(data, cb) {
        
            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("POST", "/accounts", { keys: keys, data: data }, cb);
        
        },


        createAddress: function(id, data, cb){
            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("POST", "/accounts/" + id + "/address" , { keys: keys, data: data }, cb);
        },

        update: function(id, data, cb) {
        
            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("PUT", "/accounts/" + id, { keys: keys, data: data }, cb);
        
        },


        primary: function(id, cb) {
        
            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("POST", "/accounts/" + id + "/primary", { keys: keys }, cb);
        
        },


        del: function(id, cb) {
        
            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("DELETE", "/accounts/" + id, { keys: keys }, cb);
        
        }
    
    };

};
