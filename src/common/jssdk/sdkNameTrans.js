"use strict";
function formatArgs(e, r) {
    var a = sdkConfig.getSdkType(e), i = {};
    if ("PREVERIFY_SDK" === a) {
        i.appId = r.appId, i.timestamp = r.verifyTimestamp, i.nonceStr = r.verifyNonceStr, i.signature = r.verifySignature;
        var n = (r.verifyJsApiList || []).map(function (e) {
            return displayName[e] || e
        });
        i.jsApiList = n
    } else for (var o in r)doNotDisplayArgsConfig[o] || (i[o] = r[o]);
    return i
}
function isSdkResErr(e, r, a) {
    var i = !e;
    return "REGISTER_SDK" !== a && r && r.errMsg && r.errMsg.indexOf(":ok") === -1 && r.errMsg.indexOf(":cancel") === -1 && (i = r.errMsg !== sdkConfig.notExistWroding), i
}
var sdkConfig = require("./sdkConfig.js"), displayName = {
    shareTimeline: "onMenuShareTimeline",
    sendAppMessage: "onMenuShareAppMessage",
    shareQQ: "onMenuShareQQ",
    shareWeiboApp: "onMenuShareWeibo",
    shareQZone: "onMenuShareQZone",
    "menu:share:timeline": "onMenuShareTimeline",
    "menu:share:appmessage": "onMenuShareAppMessage",
    "menu:share:qq": "onMenuShareQQ",
    "menu:share:weiboApp": "onMenuShareWeibo",
    "menu:share:QZone": "onMenuShareQZone",
    preVerifyJSAPI: "config",
    imagePreview: "previewImage",
    geoLocation: "getLocation",
    openProductViewWithPid: "openProductSpecificView",
    batchAddCard: "addCard",
    batchViewCard: "openCard",
    getBrandWCPayRequest: "chooseWXPay",
    setNavigationBarColor: "setNavigationBarBackground",
    dispatchEvent: "publish",
    clearLocalStorage: "clearStorage",
    getLocalStorage: "getStorage",
    setLocalStorage: "setStorage"
}, doNotDisplayArgsConfig = {
    appId: !0,
    verifyAppId: !0,
    verifyNonceStr: !0,
    verifySignType: !0,
    verifySignature: !0,
    verifyTimestamp: !0,
    origin: !0,
    webviewId: !0,
    __isFromOn__: !0,
    __domain__: !0,
    __url__: !0
};
module.exports = {
    getSdkDisplayName: function (e) {
        return displayName[e] || e
    }, formatArgs: formatArgs, isSdkResErr: isSdkResErr
};