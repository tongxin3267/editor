"use strict";
function init() {
    function e(e, n) {
        t.sendASSDK("login", e, n)
    }

    function n(e, n) {
        t.sendASSDK("getUserInfo", e, n)
    }

    var t = require("../../actions/webviewActions.js");
    _exports = {}, _exports.exec = function (t, o) {
        var i = t.sdkName;
        "login" === i ? e(t, o) : "getUserInfo" === i && n(t, o)
    }
}
var _exports;
init(), module.exports = _exports;