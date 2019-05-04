const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT
} = require('../OperationUtil');

const CreateAccountResponse = function (operation, tx) {
    const { type, destination, startingBalance, source } = operation;
    return {
        source_account: tx && tx.source,
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        account: destination,
        funder: source || tx.source,
        starting_balance: startingBalance
    }
}

module.exports = CreateAccountResponse;