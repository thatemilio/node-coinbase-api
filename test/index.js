// 
// You need to specify *your* own API
// key in order to run the test suite.

var keys = {};


require("./deps/currencies.js")(keys);
require("./deps/prices.js")(keys);
require("./deps/tokens.js")(keys);


if (keys.api && keys.secret) {

    require("./deps/accounts.js")(keys);
    require("./deps/buttons.js")(keys);
    require("./deps/oauth.js")(keys);
    require("./deps/authorization.js")(keys);
    require("./deps/payment-methods.js")(keys);
    require("./deps/reports.js")(keys);

}

