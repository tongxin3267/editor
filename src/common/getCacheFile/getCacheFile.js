"use strict";
function getCache(e, t, r, i) {
    wechatCacheActions = require("../../actions/wechatCacheActions.js");
    var s = e.src, o = t.origin, a = e.appId || "";
    hasProtocol.test(s) || (s = urljoin(o, s)), request({method: "get", url: s, needToken: -1}, function (e, t, s) {
        if (!e && 200 === t.statusCode) {
            var n = function () {
                var e = void 0;
                try {
                    e = JSON.parse(s)
                } catch (t) {
                    return log.info("getCacheFile.js getCache json error: jsonparse"), {v: void 0}
                }
                if (!e.name)return log.info("getCacheFile.js getCache json error: cache.name empty"), {v: void 0};
                if (!e.manifest)return log.info("getCacheFile.js getCache json error: cache.manifest empty"), {v: void 0};
                if (!e.manifest.page || !Object.keys(e.manifest.page).length)return log.info("getCacheFile.js getCache json error: cache.manifest.page empty"), {v: void 0};
                if (log.info("getCacheFile.js getCache json success " + s), wechatCacheActions.getCacheJson(r, e), e.disable)return {v: void 0};
                var n = path.join(cacheDirPath, a, e.name, "cache.json"), c = {
                    appId: a,
                    name: e.name,
                    base: e.base,
                    origin: o,
                    webviewID: r
                }, l = fs.existsSync(n);
                if (l) {
                    var u = fs.readFileSync(n, {encoding: "utf8"});
                    u = JSON.parse(u), c.urlLists = {};
                    var f = e.manifest, h = f.page, g = f.resource, p = u.manifest, d = p.page, v = p.resource;
                    for (var y in h)h[y] != d[y] && (c.urlLists[y] = h[y]);
                    for (var C in g)g[C] != v[C] && (c.urlLists[C] = g[C])
                } else c.urlLists = Object.assign({}, e.manifest.page, e.manifest.resource);
                var m = path.join(cacheDirPath, a, e.name);
                mkdir.sync(m);
                var j = Object.keys(c.urlLists).length;
                return j ? (log.info("getCacheFile.js getCache Begin getFileList " + JSON.stringify(c)), void getCacheFiles(c, function (t, r) {
                    for (var s = {}, o = !1, a = 0, c = r.length; a < c; a++) {
                        var l = r[a], u = l.url, f = l.type;
                        "success" === f ? s[u] = {filePath: l.filePath, version: l.version} : o = !0
                    }
                    proxyRule.setRuleJson(s), fs.writeFile(n, JSON.stringify(e)), i(o), log.info("getCacheFile.js getCache cache all files success")
                })) : (log.info("clearWebViewBrowserCache with urlNum: 0"), {v: void 0})
            }();
            if ("object" === ("undefined" == typeof n ? "undefined" : _typeof(n)))return n.v
        }
    })
}
function getCacheFiles(e, t) {
    var r = e.urlLists, i = e.origin, s = e.base, o = e.appId, a = e.name, n = e.webviewID, c = Object.keys(r).map(function (e) {
        var t = e;
        return hasProtocol.test(t) || (hasProtocol.test(s) ? t = urljoin(s, t) : i && (t = urljoin(i, s, t))), {
            url: t,
            appId: o,
            name: a,
            version: r[e],
            webviewID: n
        }
    });
    log.info("getCacheFile.js getCacheFiles request files " + JSON.stringify(c)), async.map(c, requestAndWriteFile, function (e, r) {
        t(e, r)
    })
}
function requestAndWriteFile(e, t) {
    function r() {
        request({url: i, method: "get", encoding: null}, function (e, s, o) {
            if (e || 200 !== s.statusCode) {
                var c = s ? s.statusCode : "";
                log.info("getCacheFile.js requestAndWriteFile " + i + " fail, times: " + u + ", statusCode: " + c + ", error: " + JSON.stringify(e)), u >= MAX_REQUEST_TIMES ? t(null, {
                    url: i,
                    type: "error"
                }) : (u++, r())
            } else fs.writeFile(l + ".response", JSON.stringify({
                statusCode: s.statusCode,
                resHeader: s.headers
            })), fs.writeFile(l, o, function () {
                log.info("getCacheFile.js requestAndWriteFile request success " + i), wechatCacheActions.getCacheFile(n, i, a), t(null, {
                    url: i,
                    filePath: l,
                    version: a,
                    type: "success"
                })
            })
        })
    }

    var i = e.url, s = e.appId, o = e.name, a = e.version, n = e.webviewID, c = i.replace(/\//g, "-").replace(/\:/g, "-"), l = path.join(cacheDirPath, s, o, c), u = 0;
    log.info("getCacheFile.js requestAndWriteFile request: " + i), r()
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}, request = require("../request/request.js"), proxyRule = require("../proxy/proxyRule.js"), path = require("path"), urljoin = require("url-join"), fs = require("fs"), mkdir = require("mkdir-p"), log = require("../log/log.js"), async = require("async"), wechatCacheActions, MAX_REQUEST_TIMES = 3, cacheDirPath = proxyRule.getCacheDirPath(), hasProtocol = /^http(s)?:\/\//;
module.exports = {getCache: getCache};