var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(api_key) {

    return {
    
        list: function(data, cb) {

            if (arguments.length === 2) {
            
                data["api_key"] = api_key;

                _req("GET", "/transactions?" + querystring.stringify(data), cb);
            
            } else {
            
                _req("GET", "/transactions?api_key=" + api_key, cb);
            
            }

        },


        get: function(id, cb) {

            _req("GET", "/transactions/" + id + "?api_key=" + api_key, cb);

        },


        sendMoney: function(data, cb) {

            data["api_key"] = api_key;

            _req("POST", "/transactions/send_money", data, cb);

        },


        requestMoney: function(data, cb) {

            data["api_key"] = api_key;

            _req("POST", "/transactions/request_money", data, cb);

        },


        resendRequest: function(id, cb) {

            _req("PUT", "/transactions/" + id + "/resend_request?api_key=" + api_key, cb);

        },


        cancelRequest: function(id, cb) {

            _req("DELETE", "/transactions/" + id + "/cancel_request?api_key=" + api_key, cb);

        },


        completeRequest: function(id, cb) {

            _req("PUT", "/transactions/" + id + "/complete_request?api_key=" + api_key, cb);

        }
    
    };

};

