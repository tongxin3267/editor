"use strict";
function getNetworkType(e, r) {
    return e ? {errMsg: "getNetworkType:ok", subtype: "wifi"} : {errMsg: "getNetworkType:" + sdkConfig.failWroding}
}
var sdkConfig = require("./sdkConfig.js"), exec = function (e, r, t, o) {
    var g = r.sdkName, i = void 0;
    "getNetworkType" === g && (i = getNetworkType(e, r.args)), o(i)
};
module.exports = {exec: exec};