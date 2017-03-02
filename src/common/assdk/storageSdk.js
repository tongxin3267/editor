"use strict";
function init() {
    function e(e, a) {
        var r = s.getUserInfo(), t = r ? r.openid : "guest";
        return p.join(d, e + "_" + a + "_" + t + ".data.json")
    }

    function a(a, r, t) {
        var o = e(a, r);
        n.writeFileSync(o, JSON.stringify(t), "utf8")
    }

    function r(r, t) {
        var o = e(r, t), i = void 0;
        try {
            i = JSON.parse(n.readFileSync(o, "utf8"))
        } catch (p) {
            i = {}, a(r, t, i)
        }
        return i
    }

    function t(e, a) {
        var t = e.appid, o = e.appname, i = r(t, o), n = e.args, p = n.key, s = i[p], g = void 0;
        g = void 0 !== s ? {
            errMsg: "getStorage:ok",
            data: s.data,
            dataType: s.dataType
        } : {errMsg: "getStorage:fail"}, a(g)
    }

    function o(e, t) {
        var o = e.appid, i = e.appname, n = r(o, i), p = e.args, s = p.key, g = p.data, d = p.dataType;
        n[s] = {data: g, dataType: d}, a(o, i, n), t({errMsg: "setStorage:ok"}, {appid: o, storage: n})
    }

    function i(e, r) {
        var t = e.appid, o = e.appname;
        a(t, o, {}), r({errMsg: "clearStorage:ok"}, {appid: i, storage: {}})
    }

    var n = require("fs"), p = require("path"), s = require(".././windowStores.js"), g = require("../../config/dirConfig.js"), d = g.WeappStorage;
    _exports = {}, _exports.exec = function (e, a) {
        var r = e.sdkName;
        "setStorage" === r || "setStorageSync" === r ? o(e, a) : "getStorage" === r || "getStorageSync" === r ? t(e, a) : "clearStorage" !== r && "clearStorageSync" !== r || i(e, a)
    }
}
var _exports;
init(), module.exports = _exports;