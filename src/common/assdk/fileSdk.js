"use strict";
function init() {
    function e(e, s) {
        i.sendASSDK("saveFile", e, s)
    }

    var i = require("../../actions/webviewActions.js");
    _exports = {}, _exports.exec = function (i, s) {
        var t = i.sdkName;
        "saveFile" === t && e(i, s)
    }
}
var _exports;
init(), module.exports = _exports;