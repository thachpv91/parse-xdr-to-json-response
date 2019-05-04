const StellarSdk = require("stellar-sdk");
const {
  CreateAccountResponse,
  AccountMergeResponse,
  AllowTrustResponse,
  ChangeTrustResponse,
  CreatePassiveOfferResponse,
  InflationResponse,
  ManageDataResponse,
  SetOptionResponse,
  ManageOfferResponse,
  PathPaymentResponse,
  PaymentResponse
} = require("./OperationResponse");

/**
 * txEnvelopeXdr
 * tx
 */

const parseOperations = ({ txEnvelopeXdr, tx }) => {
  if (!tx && !txEnvelopeXdr) {
    throw new TypeError("Missing params");
  }
  tx = tx || new StellarSdk.Transaction(txEnvelopeXdr);
  const operations = tx.operations.map(op => {
    switch (op.type) {
      case "createAccount":
        return CreateAccountResponse(op, tx);
      case "accountMerge":
        return AccountMergeResponse(op, tx);
      case "allowTrust":
        return AllowTrustResponse(op, tx);
      case "changeTrust":
        return ChangeTrustResponse(op, tx);
      case "payment":
        return PaymentResponse(op, tx);
      case "manageData":
        return ManageDataResponse(op, tx);
      case "setOptions":
        return SetOptionResponse(op, tx);
      case "createPassiveOffer":
        return CreatePassiveOfferResponse(op, tx);
      case "inflation":
        return InflationResponse(op, tx);
      case "manageOffer":
        return ManageOfferResponse(op, tx);
      case "pathPayment":
        return PathPaymentResponse(op, tx);
      default:
        return UnknownOperationResponse(op, tx);
    }
  });
  return JSON.stringify(operations);
};

module.exports = parseOperations;
