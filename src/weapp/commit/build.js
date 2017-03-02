"use strict";
function init() {
    var i = "darwin" === process.platform, n = global.appConfig.isDev, e = require("fs"), r = require("path"), t = require("../utils/tools.js"), o = require("glob"), a = require("async"), s = require("../../config/dirConfig.js"), c = s.WeappVendor, p = require("../trans/transConfigToPf.js"), l = require("../trans/transWxmlToJs.js"), u = require("mkdir-p"), f = require("./initAppConfig.js"), d = require("./initAppServiceJs.js"), j = n ? r.join(__dirname, "../vendor/") : c, g = i ? r.join(j, "wcc") : r.join(j, "wcc.exe"), v = require("child_process").spawn, m = require("../../common/log/log.js"), w = s.Weappdest, F = {
        ".wxml": !0,
        ".wxss": !0,
        ".png": !0,
        ".jpg": !0,
        ".jpeg": !0,
        ".gif": !0,
        ".ttf": !0,
        ".eot": !0,
        ".svg": !0,
        ".woff": !0
    };
    _exports = function (i, n, s) {
        var c = n.isBuildForTest, j = (i.projectpath, n.noCompile), h = r.join(w, "" + +new Date);
        u.sync(h);
        var S = {};
        S.appconfig = function (e) {
            f(i, n, function (i, n) {
                e(i, n)
            })
        }, S.appservicejs = function (e) {
            d(i, n, function (i, n) {
                e(i, n)
            })
        }, j || (S.pageFrame = function (n) {
            p(i, {isBuild: !0, isBuildForTest: c}, n)
        }), a.parallel(S, function (n, c) {
            if (n)return void s(n.toString());
            var p = c.appconfig, f = c.appservicejs;
            j ? o("./**", {
                nodir: !0,
                cwd: i.projectpath,
                ignore: ["./**/*.js", "./**/*.json", "./node_modules/**/*"]
            }, function (n, t) {
                t.forEach(function (n) {
                    var t = r.extname(n);
                    if (!F[t])return void m.info("build.js find file not in whiteList " + n);
                    var o = r.join(h, n), a = r.dirname(o);
                    u.sync(a);
                    var s = e.readFileSync(r.join(i.projectpath, n));
                    e.writeFileSync(o, s)
                }), e.writeFileSync(r.join(h, "app-config.json"), JSON.stringify(p), "utf8"), e.writeFileSync(r.join(h, "app-service.js"), f, "utf8"), s(null, h)
            }) : !function () {
                var n = c.pageFrame;
                o("./**", {
                    nodir: !0,
                    cwd: i.projectpath,
                    ignore: ["./**/*.js", "./**/*.json", "./**/*.wxss", "./node_modules/**/ * "]
                }, function (o, c) {
                    if (o)return void s(o);
                    for (var d = [], j = 0, w = c.length; j < w; j++)t.isWxmlFile(c[j]) && d.push(c[j]);
                    var F = ["-d"].concat(d), S = v(g, F, {cwd: i.projectpath}), x = "", y = "";
                    S.on("close", function (o) {
                        0 === o ? !function () {
                            n = n.replace("<!--{{allWXML}}-->", "<script>" + x + "</script>");
                            var o = {};
                            c.forEach(function (n) {
                                var a = r.join(h, n), s = r.dirname(a);
                                u.sync(s), t.isWxmlFile(n) ? o[n] = function (e) {
                                    l(n, {project: i, isBuild: !0}, function (i, r) {
                                        i ? e(i.toString()) : e(null, {
                                            isWxml: !0,
                                            destFilePath: a.replace(".wxml", ".html"),
                                            data: r.styleStr + '<page></page><script>\n                          document.dispatchEvent(new CustomEvent("generateFuncReady", {\n                            detail: {\n                              generateFunc: $gwx(\'' + n.replace(/\\/g, "/") + "')\n                            }\n                          }))\n                        </script>"
                                        })
                                    })
                                } : o[n] = function (t) {
                                    e.readFile(r.join(i.projectpath, n), function (i, n) {
                                        t(i, {isWxml: !1, destFilePath: a, data: n})
                                    })
                                }
                            }), a.parallel(o, function (i, t) {
                                if (i)return void s(i.toString());
                                for (var o in t) {
                                    var a = t[o];
                                    e.writeFileSync(a.destFilePath, a.data)
                                }
                                e.writeFileSync(r.join(h, "page-frame.html"), n, "utf8"), e.writeFileSync(r.join(h, "app-config.json"), JSON.stringify(p), "utf8"), e.writeFileSync(r.join(h, "app-service.js"), f, "utf8"), s(null, h)
                            })
                        }() : (m.error("build.js ps stderr: " + y), s(y))
                    }), S.stdout.on("data", function (i) {
                        x += i.toString()
                    }), S.stderr.on("data", function (i) {
                        y += i.toString()
                    })
                })
            }()
        })
    }
}
var _exports;
init(), module.exports = _exports;