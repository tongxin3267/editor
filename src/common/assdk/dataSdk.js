"use strict";
function init() {
    function e(e, t) {
        o.sendASSDK("authorize", e, t)
    }

    function t(e, t) {
        o.sendASSDK("operateWXData", e, t)
    }

    var o = require("../../actions/webviewActions.js");
    _exports = {}, _exports.exec = function (o, i) {
        var r = o.sdkName;
        "authorize" === r ? e(o, i) : "operateWXData" === r && t(o, i)
    }
}
var _exports;
init(), module.exports = _exports;