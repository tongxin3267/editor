"use strict";
function init() {
    function e() {
        t.writeFileSync(q, JSON.stringify(m))
    }

    function r(e) {
        var r = e.headers.host, t = e.connection.encrypted && !/^http:/.test(e.url) ? "https" : "http", n = "http" === t ? e.url : t + "://" + r + e.url, s = i.parse(n);
        return s.pureHref = s.href.replace(/\?.*/, "").replace(/\#.*/, ""), s
    }

    var t = require("fs"), n = require("./HttpsProxyAgent.js"), s = require("./addWeinreJS.js"), i = require("url"), o = require("rmdir"), a = require("path"), c = require("mkdir-p"), p = require("zlib"), u = require("../../utils/tools.js"), l = (require(".././projectStores.js"), require("../../utils/report.js")), f = require("../../weapp/weApp.js"), h = require("../../config/config.js"), d = 7, v = "https://chrome-devtools-frontend.appspot.com/serve_rev/@180870/", g = "https://clients1.google.com/tbproxy/af/", y = h.weappURLRegular, R = h.weappASURLRegular, x = nw.App.getDataPath();
    x = a.join(x, "..");
    var S = a.join(x, "wechatCache/");
    c.sync(S);
    var m, q = a.join(x, "ruleJson.js"), j = t.existsSync(q);
    j ? m = JSON.parse(t.readFileSync(q)) : (m = {}, t.writeFileSync(q, "{}")), _exports = {
        isMatchLocalFile: function (e) {
            return e = e.replace(/\?.*/, "").replace(/\#.*/, ""), !!m[e]
        }, getCacheDirPath: function () {
            return S
        }, getCacheRulePath: function () {
            return q
        }, clearCacheRule: function (r) {
            o(S, function (t, n, s) {
                m = {}, e(), c.sync(S), r && r()
            })
        }, getRuleJson: function () {
            return m
        }, setRuleJson: function (r) {
            for (var t in r)m[t] = r[t];
            e()
        }, replaceRequestOption: function (e, r, t) {
            var s = e.headers.host, o = e.connection.encrypted && !/^http:/.test(e.url) ? "https" : "http", a = "http" === o ? e.url : o + "://" + s + e.url, c = i.parse(a), p = u.getProxyForURL(c.href);
            if ("DIRECT" !== p) {
                p = p.replace("PROXY ", "").split(":");
                var l = p[0], f = parseInt(p[1]), h = /https/.test(o);
                h ? r.agent = new n({
                    proxyHost: l,
                    proxyPort: f
                }) : (r.path = c.href, r.port = f, r.host = l, delete r.hostname)
            }
            t()
        }, shouldUseLocalResponse: function (e, t) {
            var n = r(e), s = n.pureHref;
            return 0 === s.indexOf(v) || (!!y.test(s) || (0 === s.indexOf(g) || (!!R.test(s) || !!m[s])))
        }, dealLocalResponse: function (e, n, s) {
            var i = r(e), o = i.pureHref;
            if (0 === o.indexOf(v)) {
                var c = o.replace(v, "") || "devtools.html";
                "180870.manifest" === c && l([{type: d, times: 1}]);
                var p = a.join(__dirname, "manifest", c), u = t.readFileSync(p);
                s(200, {}, u)
            } else if (y.test(o))!function () {
                var e = i.href;
                f.getResponse(e, function (r, t, n) {
                    if (r)return void s(r, t, n || "");
                    a.extname(e).replace(".", "");
                    s(200, t, n)
                })
            }(); else if (0 === o.indexOf(g))s(400, {}, ""); else if (R.test(o))f.getAppservice(o, function (e, r, t) {
                return e ? void s(e, {}, t) : void s(200, r, t)
            }); else {
                var h = JSON.parse(t.readFileSync(m[o].filePath + ".response")), x = t.readFileSync(m[o].filePath);
                h.resHeader["from-wechat-cache"] = m[o].version, s(h.statusCode, h.resHeader, x)
            }
        }, replaceServerResDataAsync: function (e, r, n, i) {
            var o, a = r.headers["content-encoding"] || "", c = a.indexOf("gzip") >= 0;
            if (o = m[e.url] ? t.readFileSync(m[e.url]) : s(e.headers, r.headers, n), c) {
                var u = p.gzipSync(o);
                r.headers["content-length"] = u.length, i(u)
            } else r.headers["content-length"] = o.length, i(o)
        }, replaceResponseHeader: function (e, t, n) {
            var s = r(e), i = s.pureHref;
            m[i] && (n["from-wechat-cache"] = m[i].version)
        }
    }
}
var _exports;
init(), module.exports = _exports;