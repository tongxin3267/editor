"use strict";
function init() {
    var t = require("../actions/actions.js"), n = require("../log/log.js"), o = "win32" === process.platform, e = [], r = {
        key: "F5",
        active: function () {
            t.reload()
        },
        failed: function (t) {
            n.info("shortCut.js " + t)
        }
    }, i = new nw.Shortcut(r);
    if (e.push(i), o) {
        var u = {
            key: "Ctrl+B", active: function () {
                t.reBuild()
            }
        }, s = new nw.Shortcut(u);
        e.push(s);
        var c = {
            key: "Ctrl+R", active: function () {
                t.reload()
            }, failed: function (t) {
                n.info("shortCut.js " + t)
            }
        }, f = new nw.Shortcut(c);
        e.push(f);
        var a = {
            key: "Ctrl+Left", active: function () {
                t.goback()
            }, failed: function (t) {
                n.info("shortCut.js " + t)
            }
        }, h = new nw.Shortcut(a);
        e.push(h);
        var l = {
            key: "Ctrl+Right", active: function () {
                t.goforward()
            }, failed: function (t) {
                n.info("shortCut.js " + t)
            }
        };
        new nw.Shortcut(l);
        e.push(h);
        var p = {
            key: "Ctrl+L", active: function () {
                t.focusAddressBar()
            }, failed: function (t) {
                n.info("shortCut.js " + t)
            }
        }, w = new nw.Shortcut(p);
        e.push(w);
        var v = {
            key: "F1", active: function () {
                t.showAbout()
            }, failed: function (t) {
                n.info("shortCut.js " + t)
            }
        }, d = new nw.Shortcut(v);
        e.push(d)
    }
    _exports = {}, _exports.register = function () {
        e.forEach(function (t) {
            nw.App.registerGlobalHotKey(t)
        })
    }, _exports.unRegister = function () {
        e.forEach(function (t) {
            nw.App.unregisterGlobalHotKey(t)
        })
    }
}
var _exports;
init(), module.exports = _exports;