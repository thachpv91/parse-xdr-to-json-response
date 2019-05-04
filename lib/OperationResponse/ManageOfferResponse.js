const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
    getAssetType
} = require("../OperationUtil");
const BigNumber = require("bignumber.js");

const ManageOfferResponse = function (operation, tx) {
    const {
        type,
        source,
        selling,
        buying,
        amount,
        price, // {n, d}
        offerId
    } = operation;
    return {
        source_account: source || (tx && tx.source),
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        offer_id: offerId,
        amount,
        buying_asset_type: getAssetType(buying.code, buying.issuer),
        buying_asset_code: buying.code,
        buying_asset_issuer: buying.issuer,
        price: new BigNumber(price.n).div(price.d).toString(10),
        price_r: price,
        selling_asset_type: getAssetType(selling.code, selling.issuer),
        selling_asset_code: selling.code,
        selling_asset_issuer: selling.issuer
    };
};
module.exports = ManageOfferResponse;
