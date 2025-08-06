declare class BigInteger {
    static ZERO: BigInteger;
    static ONE: BigInteger;
    t: number;
    fromNumber: Function;
    constructor(a: any, b?: string | null, c?: string | null);
}
interface BigInteger {
    am: Function;
    DB: number;
    DM: number;
    DV: number;
    FV: number;
    F1: number;
    F2: number;
}
interface BigInteger {
    copyTo: Function;
    fromInt: Function;
    fromString: Function;
    clamp: Function;
    dlShiftTo: Function;
    drShiftTo: Function;
    lShiftTo: Function;
    rShiftTo: Function;
    subTo: Function;
    multiplyTo: Function;
    squareTo: Function;
    divRemTo: Function;
    invDigit: Function;
    isEven: Function;
    exp: Function;
    toString: Function;
    negate: Function;
    abs: Function;
    compareTo: Function;
    bitLength: Function;
    mod: Function;
    modPowInt: Function;
}
declare class RSAKey {
    n: BigInteger | null;
    e: number;
    d: any;
    p: any;
    q: any;
    dmp1: any;
    dmq1: any;
    coeff: any;
}
interface RSAKey {
    doPublic: Function;
    setPublic: Function;
    _short_encrypt: Function;
    encrypt: Function;
}
export default RSAKey;
