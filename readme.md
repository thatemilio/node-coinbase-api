### node-coinbase-api

A [node.js](http://nodejs.org) wrapper for the [Coinbase](https://coinbase.com) [API](https://coinbase.com/api/doc).



### install

`npm install coinbase-api`



### quickstart

```javascript
var coinbase = require("coinbase-api")(<your_api_key>);

coinbase.addresses(function(error, data) {
    if (error) return console.log(error);

    console.log(data);
});
```



### api

[Full API specs and examples](http://emilioTe.github.io/node-coinbase-api).

