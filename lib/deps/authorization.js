var _req = require("./req.js");


module.exports = function(keys) {

    return function(cb) {
    
        if (!keys) throw new Error("coinbase-api requires your API keys.");

        _req("GET", "/authorization", { keys: keys }, cb);
    
    };

};
