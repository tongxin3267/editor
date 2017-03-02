"use strict";
var iconv = require("iconv-lite"), log = require("../log/log.js");
module.exports = function (e, r, t) {
    if (global.weinreScript) {
        var i = e["user-agent"];
        if (i.match("wechatdevtools") || i === navigator.userAgent)return t;
        var n = r["content-type"] || "";
        if (n.indexOf("text/html") >= 0) {
            var o, a = n.match(/charset=(.*;?)/), c = !(!a || !a[1]) && a[1];
            if (o = c ? iconv.decode(t, c).toString("utf-8") : t.toString("utf-8"), o.indexOf("</head>") !== -1)return o = o.replace("</head>", global.weinreScript + "</head>"), log.info("addWeinreJS.js add weinrejs"), c && (o = iconv.encode(o, c)), new Buffer(o)
        }
    }
    return t
};