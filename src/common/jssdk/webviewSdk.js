"use strict";
function sdk(e, s, r) {
    return e = sdkNameTrans.getSdkDisplayName(e), s ? {errMsg: e + ":ok"} : {errMsg: e + ":" + sdkConfig.failWroding}
}
var sdkConfig = require("./sdkConfig.js"), sdkNameTrans = require("./sdkNameTrans.js"), exec = function (e, s, r, a) {
    var d = s.sdkName, n = sdk(d, e, s.args);
    a(n)
};
module.exports = {exec: exec};