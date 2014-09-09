// 
// node-coinbase-api
//
// npm: coinbase-api
// github: https://github.com/emilioTe/node-coinbase-api.git
//



module.exports = function(keys) {

    return {
        accountChanges: require("./deps/account-changes.js")(keys),
        account:        require("./deps/account.js")(keys),
        addresses:      require("./deps/addresses.js")(keys),
        buttons:        require("./deps/buttons.js")(keys),
        buys:           require("./deps/buys.js")(keys),
        contacts:       require("./deps/contacts.js")(keys),
        currencies:     require("./deps/currencies.js")(),
        orders:         require("./deps/orders.js")(keys),
        prices:         require("./deps/prices.js")(),
        recurringPayments: require("./deps/recurring-payments.js")(keys),
        sells:          require("./deps/sells.js")(keys),
        subscribers:    require("./deps/subscribers.js")(keys),
        tokens:         require("./deps/tokens.js")(),
        transactions:   require("./deps/transactions.js")(keys),
        transfers:      require("./deps/transfers.js")(keys),
        users:          require("./deps/users.js")(keys)
    };

};

