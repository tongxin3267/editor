"use strict";
function init() {
    function e(e, t) {
        n.sendASSDK("getNetworkType", e, t)
    }

    function t(e, t) {
        n.sendASSDK("getSystemInfo", e, t)
    }

    var n = require("../../actions/webviewActions.js");
    _exports = {}, _exports.exec = function (n, o) {
        var s = n.sdkName;
        "getNetworkType" === s ? e(n, o) : "getSystemInfo" === s && t(n, o)
    }
}
var _exports;
init(), module.exports = _exports;