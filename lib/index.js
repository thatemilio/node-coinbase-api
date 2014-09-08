// 
// node-coinbase-api
//
// npm: coinbase-api
// github: https://github.com/emilioTe/node-coinbase-api.git
//



module.exports = function(api_key) {

    return {
        accountChanges: require("./deps/account-changes.js")(api_key),
        account:        require("./deps/account.js")(api_key),
        addresses:      require("./deps/addresses.js")(api_key),
        buttons:        require("./deps/buttons.js")(api_key),
        buys:           require("./deps/buys.js")(api_key),
        contacts:       require("./deps/contacts.js")(api_key),
        currencies:     require("./deps/currencies.js")(),
        orders:         require("./deps/orders.js")(api_key),
        prices:         require("./deps/prices.js")(),
        recurringPayments: require("./deps/recurring-payments.js")(api_key),
        sells:          require("./deps/sells.js")(api_key),
        subscribers:    require("./deps/subscribers.js")(api_key),
        tokens:         require("./deps/tokens.js")(),
        transactions:   require("./deps/transactions.js")(api_key),
        transfers:      require("./deps/transfers.js")(api_key),
        users:          require("./deps/users.js")(api_key)
    };

};

