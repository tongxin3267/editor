"use strict";
var path = require("path"), cli = require("../../../../modified_modules/weinre/lib/cli.js"), tools = require("../../utils/tools.js"), weinreHasStart = !1, currentIp = {};
module.exports = function (t, e) {
    tools.getAvailablePort(function (r) {
        weinreHasStart = !0, currentIp[t] = !0, cli.run({
            httpPort: r[0], boundHost: t, readyCallBack: function () {
                e(r[0], "http://" + t + ":" + r[0] + "/client/#anonymous")
            }
        })
    }, 1)
};