const {
    OPERATION_CAMEL_TO_LOWER,
    OPERATION_STRING_TO_INT,
    getAssetType
} = require("../OperationUtil");

const AUTH_REQUIRED = 1;
const AUTH_REVOCABLE = 2;
const AUTH_IMMUTABLE = 4;

const AUTH_FLAG = {
    auth_required: AUTH_REQUIRED,
    auth_revocable: AUTH_REVOCABLE,
    auth_immutable: AUTH_IMMUTABLE
};

const convertFlagToIntegerArray = flag => {
    if (isNaN(flag) || flag < 0) return null;
    let result = [];
    flag = parseInt(flag);
    for (let fg of ["auth_required", "auth_revocable", "auth_immutable"]) {
        if (flag & (AUTH_FLAG[fg] === 0)) continue;
        result.push(AUTH_FLAG[fg]);
    }
    return result;
};

const convertFlagToStringArray = flag => {
    if (isNaN(flag) || flag < 0) return null;
    let result = [];
    flag = parseInt(flag);
    for (let fg of ["auth_required", "auth_revocable", "auth_immutable"]) {
        if (flag & (AUTH_FLAG[fg] === 0)) continue;
        result.push(fg);
    }
    return result;
};

const SetOptionResponse = function (operation, tx) {
    let {
        type,
        source,
        inflationDest,
        clearFlags,
        setFlags,
        masterWeight,
        lowThreshold,
        medThreshold,
        highThreshold,
        signer,
        homeDomain
    } = operation;
    source = source || (tx && tx.source);
    return {
        type: OPERATION_CAMEL_TO_LOWER[type],
        type_i: OPERATION_STRING_TO_INT[type],
        source_account: source,
        master_key_weight: masterWeight,
        low_threshold: lowThreshold,
        med_threshold: medThreshold,
        high_threshold: highThreshold,
        signer_key: signer
            ? signer.ed25519PublicKey || signer.sha256Hash || signer.preAuthTx
            : null,
        signer_weight: signer && signer.weight,
        home_domain: homeDomain,
        set_flags: convertFlagToIntegerArray(setFlags),
        set_flags_s: convertFlagToStringArray(setFlags),
        clear_flags: convertFlagToIntegerArray(clearFlags),
        clear_flags_s: convertFlagToStringArray(clearFlags),
        inflation_dest: inflationDest
    };
};

module.exports = SetOptionResponse;
