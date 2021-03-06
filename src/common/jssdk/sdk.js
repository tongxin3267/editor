"use strict";
var sdkConfig = require("./sdkConfig.js"), preVerify = require("./preVerify.js"), baseSdk = require("./baseSdk.js"), shareSdk = require("./shareSdk.js"), registerSdk = require("./registerSdk.js"), imageSdk = require("./imageSdk.js"), voiceSdk = require("./voiceSdk.js"), osInfoSdk = require("./osInfoSdk.js"), locationSdk = require("./locationSdk.js"), interfaceSdk = require("./interfaceSdk.js"), scanSdk = require("./scanSdk.js"), cacheSdk = require("./cacheSdk.js"), webviewSdk = require("./webviewSdk.js"), openSdk = require("./openSdk.js"), dataStoreSdk = require("./dataStoreSdk.js"), cardSdk = require("./cardSdk.js"), appserviceSdk = require("./appserviceSdk.js"), getPurview = function (e, r) {
    return e = sdkConfig.getRealName(e), r.purviewFromPreVerify || (r.purviewFromPreVerify = {}), !!sdkConfig.hasDefaultPurview(e) || (!(!r.purviewFormGetA8key || !r.purviewFormGetA8key[e]) || !(!r.purviewFromPreVerify || !r.purviewFromPreVerify[e]))
}, eventSdk = {REGISTER_SDK: registerSdk}, commonSdk = {
    BASE_SDK: baseSdk,
    SHARE_SDK: shareSdk,
    IMAGE_SDK: imageSdk,
    VOICE_SDK: voiceSdk,
    OSINFO_SDK: osInfoSdk,
    LOCATION_SDK: locationSdk,
    INTERFACE_SDK: interfaceSdk,
    SCAN_SDK: scanSdk,
    CACHE_SDK: cacheSdk,
    OPEN_SDK: openSdk,
    DATASTORE_SDK: dataStoreSdk,
    APP_SERVICE_SDK: appserviceSdk
}, viewSdk = {WEBVIEW_SDK: webviewSdk}, exec = function (e, r, i) {
    var S = e.sdkName, d = (e.args, e.ext), o = global.appConfig.haveAllPurview || getPurview(S, r), k = sdkConfig.getSdkType(S);
    if (!k) {
        if (!d.isOn)return void i(o, {errMsg: sdkConfig.notExistWroding}, {type: null});
        k = "REGISTER_SDK"
    }
    "PREVERIFY_SDK" === k ? preVerify(e, function (e) {
        var S = e.verify_info_list, d = {};
        S && S.forEach(function (e) {
            var r = e.jsapi_name;
            1 === e.state && (d[r] = !0)
        });
        var s = void 0;
        s = e.baseresponse && 0 != e.baseresponse.errcode ? "config:" + e.baseresponse.errmsg : "config:ok";
        var n = {errMsg: s};
        i(o, n, {
            defaultPurview: sdkConfig.defaultPurview,
            purviewFormGetA8key: r.purviewFormGetA8key,
            purviewFromPreVerify: d,
            type: k
        })
    }) : "CARD_SDK" === k ? cardSdk.exec(o, e, r, function (e, r) {
        i(o, r, {type: k, error: e})
    }) : commonSdk[k] ? commonSdk[k].exec(o, e, r, function (e) {
        i(o, e, {type: k})
    }) : eventSdk[k] ? eventSdk[k].exec(!0, e, r, function (e) {
        i(!0, e, {type: k})
    }) : viewSdk[k] && viewSdk[k].exec(o, e, r, function (e) {
        i(o, e, {type: k})
    })
};
module.exports = {exec: exec};