"use strict";
function init() {
    function e(e) {
        var t = e.apphash, r = n.getProjectByHash(t);
        e.args.url = "" + o.getBaseURL(r) + e.args.url
    }

    function t(t, r) {
        e(t), s.sendASSDK("navigateTo", t, r)
    }

    function r(t, r) {
        e(t), s.sendASSDK("redirectTo", t, r)
    }

    function i(e, t) {
        s.sendASSDK("navigateBack", e, t)
    }

    var s = require("../../actions/webviewActions.js"), o = (require("../../config/config.js"), require("../../weapp/utils/tools.js")), n = require(".././projectStores.js");
    _exports = {}, _exports.exec = function (e, s) {
        var o = e.sdkName;
        "navigateTo" === o ? t(e, s) : "redirectTo" === o ? r(e, s) : "navigateBack" === o && i(e, s)
    }
}
var _exports;
init(), module.exports = _exports;