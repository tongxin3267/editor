"use strict";
var exec = function (e, s, r, t) {
    var a = (s.args, s.sdkName);
    if ("dispatchAction" === a) {
        var i = require(".././webviewStores.js"), o = i.getWebviewPorts();
        for (var c in o) {
            var v = o[c];
            v.postMessage({sdkName: "dispatchAction", data: s, to: "appservice"})
        }
    }
};
module.exports = {exec: exec};