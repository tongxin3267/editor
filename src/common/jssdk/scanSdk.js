"use strict";
function scanQRCode(e, r) {
    if (e) {
        var s = {errMsg: "scanQRCode:ok"};
        return 0 !== r.needResult && (s.resultStr = '{"scan_code": {"scan_result":"scan resultStr is here"}}'), s
    }
    return {errMsg: "scanQRCode:" + sdkConfig.failWroding}
}
var sdkConfig = require("./sdkConfig.js"), exec = function (e, r, s, n) {
    var c = (r.sdkName, scanQRCode(e, r.args));
    n(c)
};
module.exports = {exec: exec};