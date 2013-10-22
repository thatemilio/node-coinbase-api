var _req = require("./req.js");


module.exports = function() {

    return {
    
        create: function(cb) {

            _req("POST", "/tokens", cb);

        },


        redeem: function(token, cb) {

            _req("POST", "/tokens/redeem", { token_id: token }, cb);

        }
    
    };

};

