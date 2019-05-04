const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
    getAssetType
} = require("../OperationUtil");

const AllowTrustResponse = function (operation, tx) {
    let { type, trustor, assetCode, authorize, source } = operation;
    source = source || (tx && tx.source);
    return {
        source_account: source,
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        asset_type: getAssetType(assetCode, source),
        asset_code: assetCode,
        asset_issuer: source,
        trustee: source,
        trustor: trustor,
        authorize
    };
};

module.exports = AllowTrustResponse;
