"use strict";
function init() {
    var e = require("../../actions/webviewActions.js");
    _exports = {}, _exports.exec = function (o, s) {
        var i = o.sdkName;
        "chooseImage" === i ? e.sendASSDK("chooseImage", o, s) : "chooseVideo" === i && e.sendASSDK("chooseVideo", o, s)
    }
}
var _exports;
init(), module.exports = _exports;