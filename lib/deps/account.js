var _req = require("./req.js");


module.exports = function(api_key) {

    return {
    
        balance: function(cb) {

            _req("GET", "/account/balance?api_key=" + api_key, cb);

        },

        
        receiveAddress: function(cb) {

            _req("GET", "/account/receive_address?api_key=" + api_key, cb);

        },


        generateReceiveAddress: function(data, cb) {

            data["api_key"] = api_key;

            _req("POST", "/account/generate_receive_address", data, cb);

        }
    
    };

};
