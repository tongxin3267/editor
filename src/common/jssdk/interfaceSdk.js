"use strict";
function getRes(e, r, s) {
    return r ? {errMsg: e + ":ok"} : {errMsg: e + ":" + sdkConfig.failWroding}
}
var sdkConfig = require("./sdkConfig.js"), exec = function (e, r, s, g) {
    var i = r.sdkName, n = getRes(i, e, r.args);
    g(n)
};
module.exports = {exec: exec};