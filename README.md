
# parse-xdr-to-json-response
A tiny library that parse contents of a Triam XDR blob to JSON format

### Install
```
npm install parse-xdr-to-json-response --save
```

### Example
```javascript
const { parseOperations } = require('../lib/parse-xdr-to-json-response');
 const envelope_xdr = "AAAAAEEPRPOcFZIwowt0GootrwjGX+aNqP5zG+kbuu4YXVLYAAAnEAAAAEUAAAACAAAAAAAAAAAAAAABAAAAAQAAAAB6LHmPFqLd3d8SbTZuAJD6B83V4P4Uw9gRyDwpdgjsEwAAAAYAAAABVVNEAAAAAABBD0TznBWSMKMLdBqKLa8Ixl/mjaj+cxvpG7ruGF1S2H//////////AAAAAAAAAAIYXVLYAAAAQKzoZwsMKh/yh5eLQD+xu4VzwgAZrg/ynqUGAJcb1oSNEVe1RI9r+k7H+O/SJvamFXx0yvEx2ohSuTRKxU7usQR2COwTAAAAQHklUcmcSvJxX13PddLcedVMPcxSeLpUddoBzJInZ2XKz2dbPe+Oz18PZ1Pbgoy75IBvHnRUX5NK+bpw5OYLUQY=";
let oprations = parseOperations({
    txEnvelopeXdr: envelope_xdr
});
console.log(oprations);
```