"use strict";
var exec = function (e, r, c, s) {
    var i = r.args, o = i.jsApiList, t = c.purviewFromPreVerify || {}, u = {};
    o.forEach(function (e) {
        t[e] && (u[e] = !0)
    });
    var a = {errMsg: "checkJsApi:ok", checkResult: u};
    s(a)
};
module.exports = {exec: exec};