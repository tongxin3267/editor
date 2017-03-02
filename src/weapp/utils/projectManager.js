"use strict";
function init() {
    function e(e, t, i) {
        var r = e.hash, a = p[r].cache;
        if (i = i.replace(/\\/g, "/"), i && a[i]) {
            var c = l.join(e.projectpath, i);
            s.readFile(c, function (e, t) {
                a[i] = {error: e, data: t}
            })
        }
        j.fileChange(e, i);
        var h = l.extname(i);
        ".wxml" === h ? n(e) : ".js" === h && o(e)
    }

    function t() {
        f.info("projectManager.js cleanProjects");
        for (var e in p)p[e].watcher.close();
        p = {}
    }

    function i(i) {
        var r = i.hash;
        if (!p[r]) {
            Object.keys(p).length > 5 && t(), f.info("manager.js initProject projectid " + i.projectid);
            var n = {};
            n.watcher = s.watch(i.projectpath, {recursive: !0}, function (t, r) {
                e(i, t, r)
            }), n.cache = {}, n.wxmlFileList = [], n.jsFileList = [], p[r] = n
        }
    }

    function r(e, t, r) {
        i(e);
        var n = e.hash, o = p[n].cache;
        if (o[t])return void process.nextTick(function () {
            r(o[t].error, o[t].data)
        });
        f.info("manager.js project " + n + " getFile " + t);
        var a = l.join(e.projectpath, t);
        s.readFile(a, function (e, i) {
            o[t] = {error: e, data: i}, r(o[t].error, o[t].data)
        })
    }

    function n(e, t) {
        u("./**/*.wxml", {nodir: !0, cwd: e.projectpath}, function (i, r) {
            if (i)t && t(i, []); else {
                var n = e.hash;
                p[n].wxmlFileList = r, t && t(null, r)
            }
        })
    }

    function o(e, t) {
        u("**/*.js", {nodir: !0, cwd: e.projectpath}, function (i, r) {
            if (i)t && t(i, []); else {
                var n = e.hash;
                p[n].jsFileList = r, t && t(null, r)
            }
        })
    }

    function a(e, t) {
        i(e);
        var r = e.hash, o = p[r].wxmlFileList;
        o.length ? process.nextTick(function () {
            t(null, o)
        }) : n(e, t)
    }

    function c(e, t) {
        i(e);
        var r = e.hash, n = p[r].jsFileList;
        n.length ? process.nextTick(function () {
            t(null, n)
        }) : o(e, t)
    }

    var s = require("fs"), l = require("path"), h = require("events").EventEmitter, u = require("glob"), f = require("../../common/log/log.js"), p = {}, j = Object.assign({}, h.prototype, {
        fileChange: function (e, t) {
            this.emit("FILE_CHANGE", e, t)
        }
    });
    _exports = {getFile: r, manager: j, getAllWXMLFileList: a, getAllJSFileList: c}
}
var _exports;
init(), module.exports = _exports;