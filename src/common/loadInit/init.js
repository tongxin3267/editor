"use strict";
var _exports;
module.exports = function () {
    var e = require("../../config/urlConfig.js"), r = require("../request/request.js"), i = require("../log/log.js"), n = require("../../utils/newReport.js"), o = require("../../utils/checkUp.js");
    i.info("init.js loadinit begin"), window.addEventListener("error", function (e) {
        var r = e.filename, o = e.error.stack;
        i.error("filename: " + r + ", msg: " + o), n("tool_error_nw", "", "filename: " + r + ", msg: " + o)
    }), global.contentWindow.addEventListener("error", function (e) {
        var r = e.filename, o = e.error.stack;
        i.error("filename: " + r + ", msg: " + o), n("tool_error_web", "", "filename: " + r + ", msg: " + o)
    });
    var t = {type: 7, version: global.appVersion};
    r({method: "post", url: e.LOADCONFIG_URL, body: JSON.stringify(t), needToken: -1}, function (e, r, n) {
        e ? i.info("init.js loadinit error: " + JSON.stringify(e)) : !function () {
            i.info("init.js loadinit end: " + n);
            var e = JSON.parse(n), r = e.cgi_list, t = {};
            r.forEach(function (e) {
                t[e.name] = e.url
            }), localStorage.setItem("urlConfig", JSON.stringify(t));
            var s = e.client_list, a = {};
            s.forEach(function (e) {
                a[e.key] = e.value
            }), o(a)
        }()
    })
};