"use strict";
function init() {
    var e = require("fs"), o = require("./pack.js"), r = require("./build.js"), i = require("path"), t = require("../../common/request/request.js"), n = require("../../config/dirConfig.js"), s = require(".././projectStores.js"), u = require("../../config/urlConfig.js");
    _exports = {};
    var p = n.Weappdest;
    _exports.uploadForTest = function (n, d, a) {
        var c = s.getProjectConfig(n), l = d.noCompile, f = void 0;
        try {
            f = c.Setting.MaxCodeSize
        } catch (v) {
            f = 1
        }
        var m = 1024 * f, q = !d.isBuildForUpload;
        r(n, {isBuildForTest: q, noCompile: l}, function (r, s) {
            if (r)return void a(r);
            var c = i.join(p, +new Date + ".wx");
            o(s, c, function (o, r) {
                var i = e.lstatSync(c), s = parseInt(i.size / 1024);
                if (s > m)return void a("代码包大小为 " + s + " kb，超过限制 " + (s - m) + " kb，请删除文件后重试");
                var p = void 0;
                if (q)p = u.testSourceURL + "?appid=" + n.appid; else {
                    var l = encodeURIComponent(d.desc), f = encodeURIComponent(d.version);
                    p = u.commitSourceURL + "?appid=" + n.appid + "&user-version=" + f + "&user-desc=" + l
                }
                t({url: p, method: "post", body: e.readFileSync(r), needToken: 1}, function (e, o, r) {
                    a(e, o, r, {MAX_APP_LENGTH: m})
                })
            })
        })
    }, _exports.upload = function (e, o, r) {
        o.isBuildForUpload = !0, _exports.uploadForTest(e, o, r)
    }
}
var _exports;
init(), module.exports = _exports;