const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
} = require('../OperationUtil');

const UnknownOperationResponse = function (operation, tx) {
    const { type, source } = operation;
    return {
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        source: source || tx && tx.source,
    }
}

module.exports = UnknownOperationResponse;