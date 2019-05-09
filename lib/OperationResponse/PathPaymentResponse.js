const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
    getAssetType
} = require('../OperationUtil');

const PathPaymentResponse = function (operation, tx) {
    const {
        type,
        sendAsset,
        sendMax,
        source,
        destination,
        destAsset,
        destAmount,
        path,
        amount,
    } = operation;
    return {
        from: source || tx.source,
        to: destination,
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        asset_type: getAssetType(destAsset.code, destAsset.issuer),
        asset_code: destAsset.issuer ? destAsset.code : 'RIA',
        asset_issuer: destAsset.issuer,
        amount: destAmount,
        source_asset_code: sendAsset.issuer ? sendAsset.code : 'RIA',
        source_asset_issuer: sendAsset.issuer,
        source_asset_type: getAssetType(sendAsset.code, sendAsset.issuer),
        source_max: sendMax,
        source_amount: amount,
        path: path,
    };
};

module.exports = PathPaymentResponse;