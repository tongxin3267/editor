"use strict";
function init() {
    var e = (require("os"), require("path")), r = require("fs"), i = require("./windowStores.js"), n = require("../config/dirConfig.js"), t = (nw.App, n.WeappFileCache), o = "apptmpfile_", p = "appforeverfile_", s = function (n) {
        var p = void 0, s = i.getUserInfo(), u = s ? s.openid : "unknow";
        do p = o + "_" + n + "_" + u + "_" + +new Date; while (r.existsSync(e.join(t, p)));
        return p
    };
    _exports = {
        isAppTmpPath: function (e) {
            return 0 === e.indexOf(o) || 0 === e.indexOf(p)
        }, getRealPath: function (r) {
            return this.isAppTmpPath(r) ? e.join(t, r) : r
        }, copyFileToTemp: function (i, n) {
            if (r.existsSync(i)) {
                var o = s(n), p = r.readFileSync(i);
                return r.writeFileSync(e.join(t, o), p), o
            }
            return !1
        }, saveFileForever: function (i) {
            var n = e.join(t, i);
            if (r.existsSync(n)) {
                var s = i.replace(o, p);
                return r.renameSync(n, e.join(t, s)), s
            }
            return !1
        }
    }
}
var _exports;
init(), module.exports = _exports;