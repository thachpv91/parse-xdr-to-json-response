const OPERATION_TYPE = {
    CREATE_ACCOUNT: 0,
    PAYMENT: 1,
    PATH_PAYMENT: 2,
    MANAGE_OFFER: 3,
    CREATE_PASSIVE_OFFER: 4,
    SET_OPTIONS: 5,
    CHANGE_TRUST: 6,
    ALLOW_TRUST: 7,
    ACCOUNT_MERGE: 8,
    INFLATION: 9,
    BUMP_SEQUENCE: 10
}

const OPERATION_TYPE_INT_TO_LOWER_CASE = [
    'create_account',
    'payment',
    'path_payment',
    'manage_offer',
    'create_passive_offer',
    'set_options',
    'change_trust',
    'allow_trust',
    'account_merge',
    'inflation',
    'bump_sequence',
];

const OPERATION_STRING_TO_INT = {
    create_account: OPERATION_TYPE.CREATE_ACCOUNT,
    payment: OPERATION_TYPE.PAYMENT,
    path_payment: OPERATION_TYPE.PATH_PAYMENT,
    manage_offer: OPERATION_TYPE.MANAGE_OFFER,
    create_passive_offer: OPERATION_TYPE.CREATE_PASSIVE_OFFER,
    set_options: OPERATION_TYPE.SET_OPTIONS,
    change_trust: OPERATION_TYPE.CHANGE_TRUST,
    allow_trust: OPERATION_TYPE.ALLOW_TRUST,
    account_merge: OPERATION_TYPE.ACCOUNT_MERGE,
    inflation: OPERATION_TYPE.INFLATION,
    bump_sequence: OPERATION_TYPE.BUMP_SEQUENCE,

    createAccount: OPERATION_TYPE.CREATE_ACCOUNT,
    pathPayment: OPERATION_TYPE.PATH_PAYMENT,
    manageOffer: OPERATION_TYPE.MANAGE_OFFER,
    createPassiveOffer: OPERATION_TYPE.CREATE_PASSIVE_OFFER,
    setOptions: OPERATION_TYPE.SET_OPTIONS,
    changeTrust: OPERATION_TYPE.CHANGE_TRUST,
    allowTrust: OPERATION_TYPE.ALLOW_TRUST,
    accountMerge: OPERATION_TYPE.ACCOUNT_MERGE,
    inflation: OPERATION_TYPE.INFLATION,
    bumpSequence: OPERATION_TYPE.BUMP_SEQUENCE,
};

const OPERATION_CAMEL_TO_LOWER = {
    createAccount: 'create_account',
    payment: 'payment',
    pathPayment: 'path_payment',
    manageOffer: 'manage_offer',
    createPassiveOffer: 'create_passive_offer',
    setOptions: 'set_options',
    changeTrust: 'change_trust',
    allowTrust: 'allow_trust',
    accountMerge: 'account_merge',
    inflation: 'inflation',
    bumpSequence: 'bump_sequence',
}

const getAssetType = (code, issuer) => {
    if (!issuer) return 'native';
    if (code && code.length <= 4) {
        return 'credit_alphanum4';
    }
    if (code && code.length <= 12) {
        return 'credit_alphanum12';
    }
    return 'unknown_type';
}

module.exports = {
    OPERATION_TYPE,
    OPERATION_TYPE_INT_TO_LOWER_CASE,
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
    getAssetType
}