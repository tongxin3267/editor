"use strict";
function init() {
    function e(e) {
        for (var r = {}, s = e.length, o = 0; o < s; o++)t[o] && 1 === parseInt(e[o]) && (r[t[o]] = !0);
        return r
    }

    var r = require("../../config/urlConfig.js"), s = require("../../utils/tools.js"), t = require("./sdkBitConfig.js"), o = (require(".././windowStores.js"), 0), i = 1, n = function (t, n) {
        var u = s.parseURL(t.url), l = {
            url: u,
            scene: 1,
            devtoolsVersion: s.getVersionNum(),
            reason: t.isSync ? o : i
        }, a = {
            url: r.GET8KEY_URL,
            body: JSON.stringify(l),
            method: "post",
            needToken: 1
        }, p = require("../request/request.js");
        p(a, function (r, s, t) {
            if (!r) {
                var o = JSON.parse(t);
                o.purviewFormGetA8key = o.jsapi_control_bytes ? e(o.jsapi_control_bytes) : null, n(o)
            }
        })
    };
    _exports = {get: n}
}
var _exports;
init(), module.exports = _exports;