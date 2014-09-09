// 
// You need to specify *your* own API
// key in order to run the test suite.

var keys = {};


require("./deps/currencies.js")(keys);
require("./deps/prices.js")(keys);
require("./deps/tokens.js")(keys);


if (keys.api && keys.secret) {

    require("./deps/account.js")(keys);
    require("./deps/buttons.js")(keys);

}

