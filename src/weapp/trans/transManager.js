"use strict";
function init() {
    function r(r, e) {
        r.error ? e(404, {"Weapp-Error": encodeURIComponent(r.error)}, r.error.toString()) : e(null, {}, r.data)
    }

    function e(e, q) {
        var g = s.getProject(e), m = s.getFileNameFromUrl(e, g), d = s.isWxmlFile(m), v = s.isWxssFile(m);
        if (v)p(e, {project: g}, function (e, t) {
            r({error: e, data: t}, q)
        }); else if (d) {
            var x = [];
            x.push(function (r) {
                n(g, {isBuild: !1}, function (e, t) {
                    r(e, t)
                })
            }), x.push(function (r) {
                a(e, {project: g}, function (e, t) {
                    r(e, t)
                })
            }), o.parallel(x, function (r, t) {
                if (r) {
                    var i = j.replace(/{{error}}/g, function () {
                        return s.parseErr(r)
                    });
                    return void q(500, {}, i)
                }
                var o = {pageFrameTpl: t[0], generateFunc: t[1].generateFunc, project: g, url: e}, n = u(o);
                q(null, n.header, n.body)
            })
        } else {
            var F = f.parse(e), h = F.pathname, T = i.basename(h);
            if (c.isAppTmpPath(T)) {
                var W = c.getRealPath(T);
                t.readFile(W, function (e, t) {
                    r({error: e, data: t}, q)
                })
            } else l.getFile(g, m, function (e, t) {
                r({error: e, data: t}, q)
            })
        }
    }

    var t = require("fs"), i = require("path"), o = require("async"), s = require("../utils/tools.js"), n = (require(".././projectStores.js"), require("./transConfigToPf.js")), a = require("./transWxmlToJs.js"), u = require("./transWxmlToHtml.js"), l = require("../utils/projectManager.js"), p = require("./transWxssToCss.js"), c = require("../../utils/file.js"), f = require("url"), j = require("../tpl/errorTpl.js");
    _exports = {getResponse: e}
}
var _exports;
init(), module.exports = _exports;