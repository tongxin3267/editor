"use strict";
function init() {
    function e() {
        a.info("vendorManager.js begin init");
        for (var e in m)if (x[e]) {
            var n = d ? e : e + ".exe", i = c.join(w, n), o = c.join(j, n), t = f.readFileSync(i);
            f.writeFileSync(o, t, {mode: 511})
        } else {
            var s = c.join(w, e), l = c.join(j, e), p = f.readFileSync(s);
            F[e] = p, f.writeFileSync(l, p)
        }
        m.appVersion = h;
        var u = JSON.stringify(m);
        f.writeFileSync(v, u), r = m, a.info("vendorManager.js end init with config " + u)
    }

    function n(e) {
        V.forEach(function (n) {
            var o = r[n], l = e[n];
            if (o < l) {
                var p = {url: g + "&type=" + n.replace(".js", ""), needToken: 0, encoding: null};
                a.info("vendorManager.js begin get new " + n + ": " + p.url), t(p, function (e, o, t) {
                    if (e)a.error("vendorManager.js end error " + JSON.stringify(e)); else {
                        try {
                            if (x[n]) {
                                var p = d ? c.join(j, n) : c.join(j, n + ".exe");
                                f.writeFileSync(p, t, {mode: 511}), r[n] = l, f.writeFileSync(v, JSON.stringify(r), "utf8")
                            } else F[n] = t.toString(), M.vendorChange(n, F[n]), f.writeFileSync(c.join(j, n), t), r[n] = l, f.writeFileSync(v, JSON.stringify(r), "utf8");
                            clearTimeout(i), q.push(n), i = setTimeout(function () {
                                s.notifications("基础组件库更新啦", "这次更新的是 \n " + q.join(","), [{title: "查看更新日志"}], function (e) {
                                    0 === e && nw.Shell.openExternal("https://mp.weixin.qq.com/wxopen/wawiki?action=dir_list&type=develop&lang=zh_CN")
                                }), q = []
                            }, 5e3)
                        } catch (u) {
                            a.error("vendorManager.js end catch " + JSON.stringify(u))
                        }
                        a.info("vendorManager.js end up " + n)
                    }
                })
            }
        })
    }

    var i, r, o = global.appConfig.isDev, t = require("request"), a = (require("glob"), require("crypto"), require("../../common/log/log.js")), s = require("../../utils/tools.js"), c = (require("mkdir-p"), require("path")), f = require("fs"), l = require("events").EventEmitter, p = require("../../config/urlConfig.js"), u = require("../../config/dirConfig.js"), d = "darwin" === process.platform, g = p.downloadRedirectURL + (d ? "?os=darwin" : "?os=win"), j = u.WeappVendor, v = c.join(j, "version.json"), w = o ? c.join(__dirname, "../vendor/") : c.join(__dirname, "../onlinevendor/"), y = o ? c.join(w, "config.json") : c.join(w, "version.json"), S = f.readFileSync(y, "utf8"), m = JSON.parse(S), h = global.appVersion, q = [], F = {}, x = {
        wcc: !0,
        wcsc: !0,
        "wcc.exe": !0,
        "wcsc.exe": !0
    };
    if (!o)try {
        if (r = JSON.parse(f.readFileSync(v, "utf8")), r.appVersion !== h)a.info("vendorManager.js get appVersion is " + r.appVersion + " , currentAppversion is " + h), e(); else for (var N in r)if (!x[N] && "appVersion" !== N) {
            var _ = c.join(j, N);
            F[N] = f.readFileSync(_, "utf8")
        }
    } catch (O) {
        a.error("vendorManager.js " + O.toString()), e()
    }
    var M = Object.assign({}, l.prototype, {
        vendorChange: function (e, n) {
            this.emit("VENDOR_CHANGE", e, n)
        }
    }), V = ["WAService.js", "WAWebview.js", "wcc", "wcsc"];
    _exports = {
        check: function (e) {
            o || n(e)
        }, getFile: function (e) {
            return o ? f.readFileSync(c.join(w, e), "utf8") : F[e]
        }, manager: M
    }
}
var _exports;
init(), module.exports = _exports;