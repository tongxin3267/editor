"use strict";
function init() {
    function e(e, t) {
        s.sendASSDK("scanCode", e, t)
    }

    var s = require("../../actions/webviewActions.js");
    _exports = {}, _exports.exec = function (s, t) {
        var n = s.sdkName;
        "scanCode" === n && e(s, t)
    }
}
var _exports;
init(), module.exports = _exports;