"use strict";
function init() {
    function e(e, o) {
        var t = {
            errMsg: "chooseContact:ok",
            phoneNumber: "18688888888",
            firstName: "lin",
            middleName: "none",
            lastName: "chao"
        };
        o(t)
    }

    require("../../actions/webviewActions.js");
    _exports = {}, _exports.exec = function (o, t) {
        var n = o.sdkName;
        "chooseContact" === n && e(o, t)
    }
}
var _exports;
init(), module.exports = _exports;