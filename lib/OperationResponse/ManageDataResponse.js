const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
} = require('../OperationUtil');

const ManageDataResponse = function (operation, tx) {
    const { type, name, value, source } = operation;
    return {
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        name,
        value,
        source_account: source || tx && tx.source,
    }
}

module.exports = ManageDataResponse;