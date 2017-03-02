"use strict";
function init() {
    var e = require("./wechatCacheStores.js");
    module.exports = function (c) {
        c.register(function (c) {
            var a = c.webviewID;
            switch (c.actionType) {
                case"GET_CACHE_JSON":
                    e.getCacheJson(a, c.cache);
                    break;
                case"GET_CACHE_FILE":
                    e.getCacheFile(a, c.url, c.version);
                    break;
                case"MATCH_CACHE_FILE":
                    e.matchCacheFile(a, c.url, c.version);
                    break;
                case"CLEAR_CACHE":
                    e.clearCache(c.callBack)
            }
        })
    }
}
init();