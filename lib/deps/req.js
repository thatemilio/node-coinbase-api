var request = require("request");
var crypto = require("crypto");
var host = "https://coinbase.com/api/v1";


module.exports = function(method, uri, data, cb) {

    var nonce = Date.parse(new Date());

    var opts = {
        method: method,
        uri:    host + uri,
        headers: {
            "User-Agent": "node-coinbase-api",
            "ACCESS_NONCE": nonce
        }
    };


    opts["headers"]["ACCESS_KEY"] = data.keys ? data.keys.api : "";

    opts["headers"]["ACCESS_SIGNATURE"] =
        crypto
        .createHmac("sha256", data.keys ? data.keys.secret : "")
        .update(nonce + opts.uri + (data.data ? JSON.stringify(data.data) : ""))
        .digest("hex");

    request(opts, function(err, res, body) {
        if (err) return cb(err);

        var json = JSON.parse(body);

        if (json.error) return cb(json);

        cb(null, json);
    });

};

