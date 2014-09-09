var _req = require("./req.js");


module.exports = function(keys) {

    return {
    
        balance: function(cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("GET", "/account/balance", { keys: keys }, cb);

        },

        
        receiveAddress: function(cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("GET", "/account/receive_address", { keys: keys }, cb);

        },


        generateReceiveAddress: function(data, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("POST", "/account/generate_receive_address", { keys: keys, data: data }, cb);

        }
    
    };

};

