const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
    getAssetType
} = require('../OperationUtil');

const PaymentResponse = function (operation, tx) {
    const { type, asset, source, destination, amount } = operation;
    return {
        from: source || tx.source,
        to: destination,
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        asset_type: getAssetType(asset.code, asset.issuer),
        asset_code: asset.code,
        asset_issuer: asset.issuer,
        amount: amount,
    }
}

module.exports = PaymentResponse;