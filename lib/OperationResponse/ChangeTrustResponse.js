const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
    getAssetType
} = require("../OperationUtil");

const ChangeTrustResponse = function (operation, tx) {
    const { line, limit, source, type } = operation;
    return {
        source_account: source || (tx && tx.source),
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        asset_type: getAssetType(line.code, line.issuer),
        asset_code: line.code,
        asset_issuer: line.issuer,
        limit: limit,
        trustee: line.issuer,
        trustor: source || (tx && tx.source)
    };
};

module.exports = ChangeTrustResponse;
