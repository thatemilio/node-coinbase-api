// 
// You need to specify *your* own API
// key in order to run the test suite.

var api_key = "";


require("./deps/currencies.js")(api_key);
require("./deps/prices.js")(api_key);
require("./deps/tokens.js")(api_key);

