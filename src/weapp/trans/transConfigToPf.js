"use strict";
function init() {
    var e = global.appConfig.isDev, r = require("fs"), s = require("path"), t = (require("../utils/tools.js"), require("../commit/getallwxss.js"), require("../../config/config.js"), require("../utils/vendorManager.js")), n = require("../utils/projectManager.js"), i = require("./transWxssToCss.js"), o = require("async"), a = {}, l = e ? {
        "<!--{{reportSDK}}-->": "reporter-sdk.js",
        "<!--{{webviewSDK}}-->": "webview-sdk.js",
        "<!--{{virtual_dom}}-->": "virtual_dom.js",
        "<!--{{exparser}}-->": "exparser.js",
        "<!--{{components_js}}-->": "wx-components.js",
        "<!--{{components_css}}-->": "wx-components.css"
    } : {"<!--{{WAWebview}}-->": "WAWebview.js"};
    t.manager.on("VENDOR_CHANGE", function () {
        a = {}
    }), n.manager.on("FILE_CHANGE", function (e, r, s) {
        if ("app.wxss" === r || "app.json" === r) {
            var t = e.hash;
            delete a[t]
        }
    }), _exports = function (n, p, u) {
        var c = p.isBuild, v = p.isBuildForTest, d = n.hash;
        return c || v || !a[d] ? void!function () {
            var p = {}, f = s.join(n.projectpath, "app.wxss"), j = r.existsSync(f);
            p.wxss = function (e) {
                return j ? void(c ? i(f, {project: n, isBuild: !0}, e) : e(null)) : void e(null)
            }, p.vendor = function (e) {
                var r = {};
                for (var s in l)r[s] = t.getFile(l[s]);
                e(null, r)
            }, o.parallel(p, function (r, s) {
                var t = require("../tpl/pageFrameTpl.js");
                if (c) {
                    if (r)return void u(r);
                    t = t.replace("<!--{{style}}-->", function () {
                        return "<style>" + s.wxss + "</style>"
                    })
                } else j && (t = t.replace("<!--{{style}}-->", function () {
                    return '<link rel="stylesheet" type="text/css" href="/app.wxss">'
                }));
                var n = Object.assign({}, l);
                c && (delete n["<!--{{reportSDK}}-->"], delete n["<!--{{webviewSDK}}-->"], delete n["<!--{{virtual_dom}}-->"], delete n["<!--{{exparser}}-->"], delete n["<!--{{components_css}}-->"], delete n["<!--{{components_js}}-->"]);
                var i = function (e) {
                    var r = n[e];
                    t = t.replace(e, function () {
                        return r.indexOf(".js") > 0 ? "<script>" + s.vendor[e] + "</script>" : r.indexOf(".css") > 0 ? "<style>" + s.vendor[e] + "</style>" : s.vendor[e]
                    })
                };
                for (var o in n)i(o);
                v && (t = t.replace("<!-- percodes -->", function () {
                    return "<script>var pageFrameStartTime = new Date();</script>"
                })), c || e || (a[d] = {error: null, data: t}), u(null, t)
            })
        }() : void process.nextTick(function () {
            var e = a[d];
            u(e.error, e.data)
        })
    }
}
var _exports;
init(), module.exports = _exports;