var request = require("request");
var host = "https://coinbase.com/api/v1";


module.exports = function(method, uri, data, cb) {
    
    var opts = {
        method: method,
        uri:    host + uri
    };

    //
    // Is there a `data` argument?
    if (arguments.length === 4) {

        opts["form"] = data;
        
        request(opts, function(err, res, body) {
            if (err) return cb(err);

            var json = JSON.parse(body);

            if (json.error) return cb(json);

            cb(null, json);
        });

    } else {
    
        var cb = data;

        request(opts, function(err, res, body) {
            if (err) return cb(err);

            var json = JSON.parse(body);

            if (json.error) return cb(json);

            cb(null, json);
        });
    
    }

};

