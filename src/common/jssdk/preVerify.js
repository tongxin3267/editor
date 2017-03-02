"use strict";
var urlConfig = require("../../config/urlConfig.js"), windowStores = require(".././windowStores.js"), log = require("../log/log.js");
module.exports = function (e, r) {
    var i = e.args, t = e.ext, s = {
        appid: i.verifyAppId,
        url: t.url,
        timestamp: i.verifyTimestamp,
        signature: i.verifySignature,
        signature_method: i.verifySignType || "sha1",
        jsapi_list: i.verifyJsApiList,
        noncestr: i.verifyNonceStr
    }, o = windowStores.getUserInfo() || {}, n = o.ticket ? urlConfig.PREVERIFY_URL + "?ticket=" + o.ticket : urlConfig.PREVERIFY_URL;
    log.info("PreVerify begin  %s", JSON.stringify(s));
    var f = require("../request/request.js");
    f({method: "post", url: n, body: JSON.stringify(s), needToken: 1}, function (e, i, t) {
        e ? log.info("PreVerify get error %s", JSON.stringify(e)) : (log.info("PreVerify get results: %s", t), r(JSON.parse(t)))
    })
};