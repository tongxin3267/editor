"use strict";
function init() {
    function i(i, n) {
        o.sendASSDK("setNavigationBarTitle", i, n)
    }

    function n(i, n) {
        o.sendASSDK("showNavigationBarLoading", i, n)
    }

    function a(i, n) {
        o.sendASSDK("hideNavigationBarLoading", i, n)
    }

    var o = require("../../actions/webviewActions.js");
    require("../../config/config.js");
    _exports = {}, _exports.exec = function (o, t) {
        var e = o.sdkName;
        "setNavigationBarTitle" === e ? i(o, t) : "showNavigationBarLoading" === e ? n(o, t) : "hideNavigationBarLoading" === e && a(o, t)
    }
}
var _exports;
init(), module.exports = _exports;