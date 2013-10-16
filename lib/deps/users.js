var _req = require("./req.js");


module.exports = function(api_key) {

    return {
    
        create: function(data, cb) {

            data["api_key"] = api_key;

            _req("POST", "/users", data, cb);

        },


        current: function(cb) {

            _req("GET", "/users?api_key=" + api_key, cb);

        },


        update: function(id, data, cb) {

            data["api_key"] = api_key;

            _req("PUT", "/users/" + id, data, cb);

        }

    };

};

