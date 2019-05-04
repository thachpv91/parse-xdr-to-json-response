const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
} = require('../OperationUtil');

const InflationResponse = function (operation, tx) {
    const { type } = operation;
    return {
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
    }
}

module.exports = InflationResponse;