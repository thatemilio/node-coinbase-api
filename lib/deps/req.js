var request = require("request");
var crypto = require("crypto");
var host = "https://coinbase.com/api/v1";
var lastNonce = 0;


module.exports = function(method, uri, data, cb) {

    var nonce = Date.parse(new Date());
    if (lastNonce === 0) lastNonce = nonce - 1;
    if (lastNonce >= nonce) nonce = lastNonce + 2;
    lastNonce = nonce;

    var opts = {
        method: method,
        uri:    host + uri,
        headers: {
            "User-Agent": "node-coinbase-api",
            "ACCESS_NONCE": nonce
        }
    };


    opts["headers"]["ACCESS_KEY"] = data.keys ? data.keys.api : "";

    if (data.data) {
        opts.headers["Content-Type"] = "application/json";
        opts["body"] = JSON.stringify(data.data);
    }


    var hmac = crypto.createHmac("sha256", data.keys ? data.keys.secret : "");
    var signature = nonce + opts.uri + (data.data ? JSON.stringify(data.data) : "");

    opts["headers"]["ACCESS_SIGNATURE"] = hmac.update(signature).digest("hex");



    request(opts, function(err, res, body) {
        if (err) return cb(err);

        var json = JSON.parse(body);

        if (json.error) return cb(json);

        cb(null, json);
    });

};

