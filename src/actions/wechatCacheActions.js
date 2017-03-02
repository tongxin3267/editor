"use strict";
function init() {
    var e = require("../dispatcher/dispatcher.js"), c = {
        getCacheJson: function (c, i) {
            e.dispatch({webviewID: c, cache: i, actionType: "GET_CACHE_JSON"})
        }, getCacheFile: function (c, i, t) {
            e.dispatch({webviewID: c, url: i, version: t, actionType: "GET_CACHE_FILE"})
        }, matchCacheFile: function (c, i, t) {
            e.dispatch({webviewID: c, url: i, version: t, actionType: "MATCH_CACHE_FILE"})
        }, clearCache: function (c) {
            e.dispatch({actionType: "CLEAR_CACHE", callBack: c.callBack})
        }
    };
    _exports = c
}
var _exports;
init(), module.exports = _exports;