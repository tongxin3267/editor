"use strict";
var getCacheFile = require("../getCacheFile/getCacheFile.js"), exec = function (e, c, a, r) {
    var t = c.args, i = c.ext;
    getCacheFile.getCache(t, i, c.webviewID, function (e) {
        r(e ? {errMsg: "cache:fail"} : {errMsg: "cache:ok"})
    })
};
module.exports = {exec: exec};