const {
  OPERATION_CAMEL_TO_LOWER,
  OPERATION_STRING_TO_INT,
  getAssetType
} = require('../OperationUtil');

const LimitAssetResponse = function (operation, tx) {
  const { type, asset } = operation;
  return {
      type: OPERATION_CAMEL_TO_LOWER[type],
      type_i: OPERATION_STRING_TO_INT[type],
      asset_type: getAssetType(asset.code, asset.issuer),
      asset_code: asset.issuer ? asset.code : 'RIA',
      asset_issuer: asset.issuer,
  }
}

module.exports = LimitAssetResponse;