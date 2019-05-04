const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
} = require('../OperationUtil');

const AccountMergeResponse = function (operation, tx) {
    const { type, destination, source } = operation;
    return {
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        destination: destination,
        source: source || tx && tx.source,
    }
}

module.exports = AccountMergeResponse;