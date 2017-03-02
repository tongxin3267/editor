"use strict";
function init() {
    function e(e) {
        var o = t.join(e, "app.dev.json");
        return r.existsSync(o)
    }

    var t = require("path"), r = require("fs"), o = require("url"), n = require(".././projectStores.js"), a = (require("../../config/config.js"), require("./projectManager.js"), require("../../config/dirConfig.js")), s = require(".././windowStores.js");
    _exports = {}, _exports.noBrowser = ["window={Math:Math}/*兼容babel*/", "location", "document", "navigator", "self", "localStorage", "history", "Caches"], _exports.getBaseURL = function (e) {
        return "http://" + e.hash + ".debug.open.weixin.qq.com/"
    }, _exports.getProjectHashFromURL = function (e) {
        var t = e.replace(/https?:\/\//, "").split(".");
        return t[0]
    }, _exports.getWeappURL = function (e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = "http://" + e.hash + ".debug.open.weixin.qq.com/";
        if (t.justHost)return r;
        var n = void 0;
        try {
            n = _exports.getProjectConfig(e)
        } catch (a) {
            return ""
        }
        var s = n.pages || [];
        return o.resolve(r, s[0] + ".html")
    }, _exports.parseErr = function (e) {
        return e = JSON.stringify(e), e.replace(/\\/g, "/").replace(/`/g, "\\`")
    }, _exports.getPageJSON = function (e, o) {
        try {
            var n = this.getBaseURL(e);
            o = o.replace(n, "").replace(/\?.*/g, "");
            var a = e.projectpath, s = JSON.parse(r.readFileSync(t.join(a, "app.json"), "utf8")), i = t.join(a, o.replace(".html", ".json")), p = r.existsSync(i), c = {};
            return p && (c = JSON.parse(r.readFileSync(i, "utf8"))), Object.assign({}, s.window, c)
        } catch (u) {
            return {}
        }
    }, _exports.getProjectConfig = function (o, n) {
        var a = o.projectpath, s = !n && e(a) ? t.join(a, "app.dev.json") : t.join(a, "app.json"), i = void 0;
        try {
            i = r.readFileSync(s, "utf8")
        } catch (p) {
            throw"app.json 文件读取错误，错误信息：" + _exports.parseErr(p)
        }
        var c = void 0;
        try {
            c = JSON.parse(i)
        } catch (p) {
            throw _exports.parseErr(s) + " 错误： " + _exports.parseErr(p)
        }
        return c
    }, _exports.getProject = function (e) {
        var t = this.getProjectHashFromURL(e);
        return n.getProjectByHash(t)
    }, _exports.getFileRelativePath = function (e, t) {
        var r = o.parse(e), n = r.pathname || "";
        if (n = n.replace(/^\//, ""), "" === n) {
            var a = void 0;
            try {
                a = _exports.getProjectConfig(t)
            } catch (s) {
                return ""
            }
            var i = a.pages || [];
            return i[0] ? i[0] + ".wxml" : "index.wxml"
        }
        return n.replace(/\.html$/, ".wxml")
    }, _exports.getFilePath = function (e, r) {
        var o = this.getFileRelativePath(e, r), n = r.projectpath;
        return t.join(n, o)
    }, _exports.isWxmlFile = function (e) {
        return /\.wxml$/.test(e)
    }, _exports.isWxssFile = function (e) {
        return /\.wxss$/.test(e)
    }, _exports.isWxmlURL = function (e) {
        var r = o.parse(e), n = r.pathname, a = t.extname(n);
        return "" === a || ".html" === a || ".wxml" === a
    }, _exports.getWxImports = function (e) {
        var t = e.match(/\<wx-import.*\<\/wx-import\>/g) || [], r = [];
        return t.forEach(function (e) {
            var t = e.match(/src="(.*?)"/), o = t ? t[1] : "";
            o && (/$\.wxml/.test(o) || (o += ".wxml"), r.push(o))
        }), r
    }, _exports.getFileNameFromUrl = function (e, t) {
        return this.getFileRelativePath(e, t)
    }, _exports.getPageCssFiles = function (e, o, n) {
        var a = this.getFileRelativePath(e, o), s = a.replace(/\..*$/g, ".wxss");
        return r.existsSync(t.join(o.projectpath, s)) ? t.parse(s).base : ""
    }, _exports.getProjectStorage = function (e) {
        var o = e.appid, n = e.appname, i = s.getUserInfo(), p = i ? i.openid : "unknow", c = t.join(a.WeappStorage, o + "_" + n + "_" + p + ".data.json"), u = void 0;
        try {
            u = r.readFileSync(c, "utf8")
        } catch (l) {
            u = "{}"
        }
        return JSON.parse(u)
    }
}
var _exports;
init(), module.exports = _exports;