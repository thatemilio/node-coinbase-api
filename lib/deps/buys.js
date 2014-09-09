var _req = require("./req.js");


module.exports = function(keys) {

    return function(data, cb) {
    
        if (!keys) throw new Error("coinbase-api requires your API keys.");

        _req("POST", "/buys", { keys: keys, data: data }, cb);
    
    };

};

