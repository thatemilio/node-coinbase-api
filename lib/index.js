// 
// node-coinbase-api
//
// npm: coinbase-api
// github: https://github.com/emilioTe/node-coinbase-api.git
//



module.exports = function(keys) {

    return {
        accountChanges: require("./deps/account-changes.js")(keys),
        accounts:       require("./deps/accounts.js")(keys),
        addresses:      require("./deps/addresses.js")(keys),
        authorization:  require("./deps/authorization.js")(keys),
        buttons:        require("./deps/buttons.js")(keys),
        buys:           require("./deps/buys.js")(keys),
        contacts:       require("./deps/contacts.js")(keys),
        currencies:     require("./deps/currencies.js")(),
        oauth:          require("./deps/oauth.js")(keys),
        orders:         require("./deps/orders.js")(keys),
        paymentMethods: require("./deps/payment-methods.js")(keys),
        prices:         require("./deps/prices.js")(),
        recurringPayments: require("./deps/recurring-payments.js")(keys),
        reports:        require("./deps/reports.js")(keys),
        sells:          require("./deps/sells.js")(keys),
        subscribers:    require("./deps/subscribers.js")(keys),
        tokens:         require("./deps/tokens.js")(),
        transactions:   require("./deps/transactions.js")(keys),
        transfers:      require("./deps/transfers.js")(keys),
        users:          require("./deps/users.js")(keys)
    };

};

