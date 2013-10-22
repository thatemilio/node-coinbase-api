// 
// You need to specify *your* own API
// key in order to run the test suite.

var api_key = "";


if (!api_key) return console.log("You need to include your API key!");


require("./deps/currencies.js")(api_key);
require("./deps/prices.js")(api_key);
require("./deps/tokens.js")(api_key);

