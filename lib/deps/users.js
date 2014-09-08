var _req = require("./req.js");


module.exports = function(api_key) {

    return {
    
        create: function(data, cb) {

            if (!api_key) throw new Error("coinbase-api requires your API key.");

            data["api_key"] = api_key;

            _req("POST", "/users", data, cb);

        },


        current: function(cb) {

            if (!api_key) throw new Error("coinbase-api requires your API key.");

            _req("GET", "/users?api_key=" + api_key, cb);

        },


        update: function(id, data, cb) {

            if (!api_key) throw new Error("coinbase-api requires your API key.");

            data["api_key"] = api_key;

            _req("PUT", "/users/" + id, data, cb);

        }

    };

};

