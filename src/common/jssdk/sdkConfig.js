"use strict";
var sdkNameToType = {
    preVerifyJSAPI: "PREVERIFY_SDK",
    checkJsApi: "BASE_SDK",
    shareTimeline: "SHARE_SDK",
    sendAppMessage: "SHARE_SDK",
    shareQQ: "SHARE_SDK",
    shareWeiboApp: "SHARE_SDK",
    shareQZone: "SHARE_SDK",
    "menu:share:appmessage": "REGISTER_SDK",
    "menu:share:timeline": "REGISTER_SDK",
    "menu:share:qq": "REGISTER_SDK",
    "menu:share:weiboApp": "REGISTER_SDK",
    "menu:share:QZone": "REGISTER_SDK",
    onVoiceRecordEnd: "REGISTER_SDK",
    onVoicePlayEnd: "REGISTER_SDK",
    onNavigationBarRightButtonClick: "REGISTER_SDK",
    onPageStateChange: "REGISTER_SDK",
    imagePreview: "IMAGE_SDK",
    chooseImage: "IMAGE_SDK",
    uploadImage: "IMAGE_SDK",
    downloadImage: "IMAGE_SDK",
    startRecord: "VOICE_SDK",
    stopRecord: "VOICE_SDK",
    playVoice: "VOICE_SDK",
    pauseVoice: "VOICE_SDK",
    stopVoice: "VOICE_SDK",
    uploadVoice: "VOICE_SDK",
    downloadVoice: "VOICE_SDK",
    translateVoice: "VOICE_SDK",
    getNetworkType: "OSINFO_SDK",
    geoLocation: "LOCATION_SDK",
    openLocation: "LOCATION_SDK",
    hideOptionMenu: "INTERFACE_SDK",
    showOptionMenu: "INTERFACE_SDK",
    closeWindow: "INTERFACE_SDK",
    hideMenuItems: "INTERFACE_SDK",
    showMenuItems: "INTERFACE_SDK",
    hideAllNonBaseMenuItem: "INTERFACE_SDK",
    showAllNonBaseMenuItem: "INTERFACE_SDK",
    setNavigationBarButtons: "INTERFACE_SDK",
    setNavigationBarColor: "INTERFACE_SDK",
    setPageTitle: "INTERFACE_SDK",
    enableFullScreen: "INTERFACE_SDK",
    showNavigationBarLoading: "INTERFACE_SDK",
    hideNavigationBarLoading: "INTERFACE_SDK",
    setTabBar: "INTERFACE_SDK",
    scanQRCode: "SCAN_SDK",
    cache: "CACHE_SDK",
    publicCache: "CACHE_SDK",
    openUrlWithExtraWebview: "WEBVIEW_SDK",
    dispatchEvent: "WEBVIEW_SDK",
    getUserInfo: "OPEN_SDK",
    clearLocalStorage: "DATASTORE_SDK",
    getLocalStorage: "DATASTORE_SDK",
    setLocalStorage: "DATASTORE_SDK",
    batchAddCard: "CARD_SDK",
    chooseCard: "CARD_SDK",
    batchViewCard: "CARD_SDK",
    dispatchAction: "APP_SERVICE_SDK"
}, defaultPurview = {
    preVerifyJSAPI: !0,
    onVoiceRecordEnd: !0,
    onVoicePlayEnd: !0,
    getNetworkType: !0,
    cache: !0
}, realName = {
    shareTimeline: "menu:share:timeline",
    sendAppMessage: "menu:share:appmessage",
    shareQQ: "menu:share:qq",
    shareWeiboApp: "menu:share:weiboApp",
    shareQZone: "menu:share:QZone",
    setNavigationBarColor: "setNavigationBarBackground",
    publish: "dispatchEvent"
};
module.exports = {
    notExistWroding: "没有此SDK或暂不支持此SDK模拟",
    failWroding: "fail, the permission value is offline verifying",
    defaultPurview: defaultPurview,
    hasDefaultPurview: function (e) {
        return defaultPurview[e]
    },
    getSdkType: function (e) {
        return sdkNameToType[e]
    },
    getRealName: function (e) {
        return realName[e] || e
    }
};