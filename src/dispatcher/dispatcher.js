"use strict";
function init() {
    var e = require("../lib/flux.js").Dispatcher, r = new e, i = require("./webviewDispatcher.js"), s = require("./leftviewDispatcher.js"), t = require("./windowDispatcher.js"), c = require("./wechatCacheDispatcher.js"), p = require("./projectDispatcher.js"), a = i(r);
    s(r, a), t(r), c(r), p(r), _exports = r
}
var _exports;
init(), module.exports = _exports;