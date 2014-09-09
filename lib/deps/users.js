var _req = require("./req.js");


module.exports = function(keys) {

    return {
    
        create: function(data, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("POST", "/users", { keys: keys, data: data }, cb);

        },


        current: function(cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("GET", "/users", { keys: keys }, cb);

        },


        update: function(id, data, cb) {

            if (!keys) throw new Error("coinbase-api requires your API keys.");

            _req("PUT", "/users/" + id, { keys: keys, data: data }, cb);

        }

    };

};

