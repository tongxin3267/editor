"use strict";
function init() {
    function o(o, e) {
        n.sendASSDK("getLocation", o, e)
    }

    function e(o, e) {
        n.sendASSDK("openLocation", o, e)
    }

    var n = require("../../actions/webviewActions.js");
    require("../../config/config.js");
    _exports = {}, _exports.exec = function (n, t) {
        var i = n.sdkName;
        "getLocation" === i ? o(n, t) : "openLocation" === i && e(n, t)
    }
}
var _exports;
init(), module.exports = _exports;