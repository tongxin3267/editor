"use strict";
function init() {
    function r(r, e) {
        var t = r.find(function (r) {
            return r.indexOf(e) > -1
        });
        if (t)return t = t.trim(), t.split(/\s/).pop()
    }

    function e(e) {
        var t = 'REG QUERY "HKCU\\SOFTWARE\\MICROSOFT\\WINDOWS\\CURRENTVERSION\\INTERNET SETTINGS"';
        y(t, {}, function (t, n, o) {
            if (t)d.error("setAppProxy.js getWinSystemProxySetting commandStr: " + JSON.stringify(t)), e(t); else try {
                var i = n.split(/\r?\n/), s = {};
                s.AutoConfigURL = r(i, "AutoConfigURL"), s.ProxyEnable = !!parseInt(r(i, "ProxyEnable")), s.ProxyServer = r(i, "ProxyServer"), s.ProxyOverride = r(i, "ProxyOverride"), s.ProxyOverride && (s.ProxyOverride = s.ProxyOverride.split(";")), d.info("setAppProxy.js getWinSystemProxySetting: " + JSON.stringify(s)), e(null, s)
            } catch (p) {
                d.error("setAppProxy.js getWinSystemProxySetting stdout error " + n + " " + JSON.stringify(p)), e(p)
            }
        })
    }

    function t(r) {
        var e = P.join(__dirname, "getosxproxysetting.sh");
        y("sh " + e, {}, function (e, t, n) {
            if (e)d.error("setAppProxy.js getOsxSystemProxySetting : " + JSON.stringify(e)), r(e); else {
                var o = t.split(/\r?\n/);
                try {
                    var i = {};
                    i.httpPrxoyEnable = "Enabled: Yes" === o[0];
                    var s = o[1].replace("Server:", "").trim(), p = o[2].replace("Port:", "").trim();
                    i.httpProxy = s ? s + ":" + p : "", i.httpsProxyEnable = "Enabled: Yes" === o[4];
                    var u = o[5].replace("Server:", "").trim(), a = o[6].replace("Port:", "").trim();
                    i.httpsProxy = u ? u + ":" + a : "";
                    var c = "Enabled: Yes" === o[9];
                    i.AutoConfigURL = c ? o[8].replace("URL:", "").trim() : "", 0 === o[10].indexOf("There aren't any bypass domains") ? i.ProxyOverride = [] : i.ProxyOverride = o[10].split(" "), d.info("setAppProxy.js getOsxSystemProxySetting: " + JSON.stringify(i)), r(null, i)
                } catch (f) {
                    d.error("setAppProxy.js getOsxSystemProxySetting set: " + JSON.stringify(f)), r(f)
                }
            }
        })
    }

    function n(r, e) {
        r.AutoConfigURL ? x(r.AutoConfigURL, function (t, n, s) {
            if (t)e(t); else try {
                var p = P.join(L, "temppac.pac");
                v.writeFileSync(p, s + "\n module.exports=FindProxyForURL", "utf8");
                var u = require(p), a = u.toString();
                d.info("setAppProxy.js initProxy FindProxyForURLFun: " + a);
                var c = i(), f = o(), y = s.replace(a, "\n              function FindProxyForURL(url, host) {\n                " + c + "\n                " + f + "\n                " + a + "\n                return FindProxyForURL(url, host)\n              }\n            "), x = P.join(L, "pacFile.pac");
                if (v.writeFileSync(x, s.replace(a, y)), d.info("setAppProxy.js initProxy write " + x + " success"), m) {
                    var l = document.createElement("img");
                    l.src = x, r.AutoConfigURL = l.src + "?" + +new Date
                } else r.AutoConfigURL = encodeURI("file:///" + x + "?" + +new Date);
                e(null, r)
            } catch (h) {
                e(h)
            }
        }) : e(null, r)
    }

    function o(r) {
        try {
            if (r && r.length) {
                var e = r.map(function (r) {
                    return "host.indexOf('" + r + "') === 0"
                });
                return e = e.join("||"), d.info("setAppProxy.js makeProxyOverride " + e), "if(" + e + ") {\n            return 'DIRECT'\n          }"
            }
            return ""
        } catch (t) {
            return d.error("setAppProxy.js makeProxyOverride error: " + JSON.stringify(t)), ""
        }
    }

    function i() {
        var r = S.getRuleJson(), e = Object.keys(r);
        e.push(b), e.push(w);
        var t = e.map(function (r) {
            return "url.indexOf('" + r + "') === 0"
        });
        return t = t.join("||"), t = t + " || " + N + ".test(url) || " + T + ".test(url)", d.info("setAppProxy.js makeProxyLocal " + t), "if (" + t + ") {\n      return 'PROXY 127.0.0.1:" + global._port + "'\n    }\n    "
    }

    function s(r, e) {
        if (r === A)return {mode: "pac_script", pacScript: {url: e.AutoConfigURL}};
        if (r === U) {
            var t = i(), n = o();
            return {
                mode: "pac_script",
                pacScript: {data: "function FindProxyForURL(url, host) {\n                " + t + "\n                " + n + "\n                return 'DIRECT'\n              }"}
            }
        }
        if (m && r === C) {
            var s = i(), p = o(e.ProxyOverride), u = "";
            if (e.ProxyServer)if (e.ProxyServer.indexOf("=") === -1)u = "return 'PROXY " + e.ProxyServer + "'"; else {
                var a = e.ProxyServer.split(";");
                a.forEach(function (r) {
                    var e = r.replace(/https?=/, "");
                    0 === r.indexOf("https") ? u += "\n            if(url.indexOf('https') === 0)\n              return 'PROXY " + e + "'\n          " : 0 === r.indexOf("http") && (u += "\n            if(url.indexOf('http') === 0 && url.indexOf('https') === -1)\n              return 'PROXY " + e + "'\n          ")
                })
            } else u = "return 'DIRECT'";
            return {
                mode: "pac_script",
                pacScript: {data: "function FindProxyForURL(url, host) {\n                " + s + "\n                " + p + "\n                " + u + "\n                return 'DIRECT'\n              }"}
            }
        }
        if (!m && r === C) {
            var c = i(), f = o(e.ProxyOverride), y = "";
            return e.httpsProxyEnable && (y += "\n        if(url.indexOf('https:') === 0)\n          return 'PROXY " + e.httpsProxy + "'\n      "), e.httpPrxoyEnable && (y += "\n        if(url.indexOf('http:') === 0)\n          return 'PROXY " + e.httpProxy + "'\n      "), e.ProxyServer && (y = "return 'PROXY " + e.ProxyServer + "'"), {
                mode: "pac_script",
                pacScript: {data: "function FindProxyForURL(url, host) {\n                " + c + "\n                " + f + "\n                " + y + "\n                return 'DIRECT'\n              }"}
            }
        }
    }

    function p(r, e) {
        d.info("setAppProxy.js setChromeProxy config: " + JSON.stringify(r)), chrome.proxy.settings.set({
            value: r,
            scope: "regular"
        }, function () {
            e()
        }), j || (j = !0, u())
    }

    function u() {
        v.watchFile(E, function () {
            c(function () {
                d.info("setAppProxy.js watch cacheRule accessed")
            })
        })
    }

    function a(r, e) {
        var t = void 0;
        t = r.AutoConfigURL ? s(A, r) : m && r.ProxyEnable ? s(C, r) : m || !r.httpPrxoyEnable && !r.httpsProxyEnable ? s(U) : s(C, r), p(t, function () {
            e(null, r)
        })
    }

    function c(r) {
        var o = g.getProxySetting();
        if (O.clearProxyCache(), "SYSTEM" === o) {
            var i = [];
            m ? i.push(e) : i.push(t), i.push(n), i.push(a), l.waterfall(i, function (e, t) {
                if (e) {
                    var n = s(U);
                    p(n, function () {
                        r()
                    }), d.error("setAppProxy.js set system error " + JSON.stringify(e))
                } else r()
            })
        } else if ("DIRECT" === o) {
            var u = s(U);
            p(u, function () {
                r()
            })
        } else {
            var c = s(C, {ProxyServer: o.replace("PROXY ", "")});
            p(c, function () {
                r()
            })
        }
    }

    function f(r) {
        c(r)
    }

    var y = require("child_process").exec, x = require("request"), l = require("async"), P = require("path"), v = require("fs"), d = (nw.App, require("../log/log.js")), h = require("mkdir-p"), g = require(".././windowStores.js"), S = require("./proxyRule.js"), O = require("../../utils/tools.js"), R = require("../../config/config.js"), m = "win32" === process.platform, E = S.getCacheRulePath(), j = !1, A = 0, U = 1, C = 2, F = P.join(nw.App.getDataPath(), ".."), L = P.join(F, "proxyCache/");
    h.sync(L);
    var b = "https://chrome-devtools-frontend.appspot.com/serve_rev/@180870/", w = "https://clients1.google.com/tbproxy/af/", N = R.weappURLRegular, T = R.weappASURLRegular;
    _exports = {set: c, up: f}
}
var _exports;
init(), module.exports = _exports;