"use strict";
function init() {
    var e = global.appConfig.isDev, r = (require("./trans/transConfigToPf.js"), require("./trans/transWxmlToJs.js"), require("./trans/transWxmlToHtml.js"), require("./trans/transManager.js")), s = require("./utils/tools.js"), i = (require("async"), require("fs")), t = require("path"), p = require("url"), n = require("./utils/vendorManager.js"), c = (require("glob"), require("./utils/projectManager.js")), o = require("../config/appserviceConfig.js"), a = require("./projectStores.js"), u = require("./windowStores.js"), l = require("./tpl/errorTpl.js"), j = require("./tpl/appserviceErrorTpl.js"), f = t.join(__dirname, "appservice/asdebug.js"), v = i.readFileSync(f, "utf8"), g = t.join(__dirname, "appservice/ascheck.js"), d = i.readFileSync(g, "utf8"), h = s.noBrowser.join(",");
    _exports.getAppservice = function (r, f) {
        var g = s.getProject(r), q = p.parse(r), _ = q.pathname, m = /appservice$/.test(_), w = /appservice-sdk\.js$/.test(_), x = /asdebug\.js$/.test(_), S = /ascheck\.js$/.test(_), C = /webnode\.js$/.test(_), F = /reporter-sdk\.js/.test(_), y = /app_service_engine\.js/.test(_), T = (/\.js$/.test(_), /\.js\.map$/.test(_)), b = /WAService\.js/.test(_), k = (g.appname.toLowerCase(), g.appid.toLowerCase(), g.hash), $ = void 0;
        try {
            $ = s.getProjectConfig(g)
        } catch (A) {
            var J = l.replace(/{{error}}/g, function () {
                return JSON.stringify(A)
            });
            return void f(500, {}, J)
        }
        var W = a.getProjectConfig(g);
        $.projectConfig = W, $.appserviceConfig = o;
        var O = $.pages || [];
        if (m)!function () {
            var r = require("./tpl/appserviceTpl.js"), s = "http://" + k + ".appservice.open.weixin.qq.com/", i = [], t = [], p = [];
            c.getAllJSFileList(g, function (n, c) {
                for (var o = {}, a = 0, l = O.length; a < l; a++) {
                    var j = O[a] + ".js";
                    o[j] = !0, i.push("<script>__wxRoute = '" + O[a] + "';__wxRouteBegin = true</script>"), i.push('<script src="' + s + j + '"></script>')
                }
                for (var v = 0, d = c.length; v < d; v++) {
                    var h = c[v];
                    o[h] || ("app.js" === h ? p.push('<script src="' + s + h + '"></script>') : t.push('<script src="' + s + h + '"></script>'))
                }
                i = t.concat(p).concat(i), e ? (i.unshift('<script src="' + s + 'app_service_engine.js"></script>'), i.unshift('<script src="' + s + 'reporter-sdk.js"></script>'), i.unshift('<script src="' + s + 'appservice-sdk.js"></script>'), i.unshift('<script src="' + s + 'webnode.js"></script>')) : i.unshift('<script src="' + s + 'WAService.js"></script>'), i.unshift('<script src="' + s + 'asdebug.js"></script>'), $.appname = g.appname, $.appid = g.appid, $.apphash = g.hash, $.isTourist = g.isTourist, g.isTourist && ($.userInfo = u.getUserInfo()), i.unshift("<script>var __wxConfig = " + JSON.stringify($) + "</script>"), r = r.replace("<script></script>", i.join("")), f(null, {}, r)
            })
        }(); else if (b)f(null, {}, n.getFile("WAService.js")); else if (F)f(null, {}, n.getFile("reporter-sdk.js")); else if (y)f(null, {}, n.getFile("app_service_engine.js")); else if (w)f(null, {}, n.getFile("appservice-sdk.js")); else if (x)f(null, {}, v); else if (S)f(null, {}, d); else if (C)f(null, {}, n.getFile("webnode.js")); else if (T)!function () {
            var e = t.join(g.projectpath, _);
            i.readFile(e, function (r, s) {
                return r ? void f(404, {}, "do not find " + e) : void f(200, {}, s)
            })
        }(); else {
            var P = r.replace("http://" + k + ".appservice.open.weixin.qq.com/", ""), R = t.join(g.projectpath, P), L = void 0;
            try {
                L = i.readFileSync(R, "utf8"), L = "app.js" === P || O.indexOf(P.replace(/\.js/, "")) !== -1 ? 'define("' + P + '", function(require, module){var ' + h + ";\n" + L + '\n});require("' + P + '")' : 'define("' + P + '", function(require, module){var ' + h + ";\n" + L + "\n})", f(null, {}, L)
            } catch (A) {
                L = j.replace("{{error}}", JSON.stringify(A)), f(null, {}, L)
            }
        }
    }, _exports.getResponse = function (e, s) {
        r.getResponse(e, s)
    }
}
var _exports = {};
init(), module.exports = _exports;