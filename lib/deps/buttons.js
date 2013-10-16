var _req = require("./req.js");


module.exports = function(api_key) {

    return function(data, cb) {
    
        data["api_key"] = api_key;

        _req("POST", "/buttons", data, cb);
    
    };

};

