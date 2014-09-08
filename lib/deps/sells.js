var _req = require("./req.js");


module.exports = function(api_key) {

    return function(data, cb) {
    
        if (!api_key) throw new Error("coinbase-api requires your API key.");

        data["api_key"] = api_key;

        _req("POST", "/sells", data, cb);
    
    };

};

