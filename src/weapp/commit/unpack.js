"use strict";
function init() {
    function r(r) {
        return r.slice(u, s).readInt32BE()
    }

    function e(r) {
        return r.slice(l, f).readInt32BE()
    }

    function n(n) {
        for (var i = r(n), t = e(n), o = (n.slice(d, d + i), []), c = d, a = 0; a < t; a++) {
            var u = {}, s = n.slice(c, c + 4).readInt32BE();
            c += 4, u.fileName = n.slice(c, c + s).toString(), c += s, u.offset = n.slice(c, c + 4).readInt32BE(), c += 4, u.length = n.slice(c, c + 4).readInt32BE(), c += 4, o.push(u)
        }
        return o
    }

    function i(r, e) {
        var i = n(r);
        i.forEach(function (n) {
            var i = n.fileName, a = n.offset, u = n.length, s = c.dirname(i);
            o.sync(c.join(e, s));
            var l = c.join(e, i), f = r.slice(a, a + u);
            t.writeFileSync(l, f)
        })
    }

    var t = require("fs"), o = require("mkdir-p"), c = require("path"), a = require("../../common/log/log.js"), u = 5, s = 9, l = 14, f = 18, d = 18;
    _exports = function (r, e) {
        t.readFile(r, function (n, t) {
            if (n)return e(n), void a.error("unpack.js read " + r + " error: " + n.toString);
            var o = c.dirname(r), u = c.join(o, "source");
            try {
                i(t, u)
            } catch (s) {
                return a.error("unpack.js unpack error: " + s.toString), void e(s)
            }
            e(null, u)
        })
    }
}
var _exports;
init(), module.exports = _exports;