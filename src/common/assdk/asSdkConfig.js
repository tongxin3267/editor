"use strict";
function init() {
    _exports = {};
    var e = {
        login: "ACCOUNT_SDK",
        authorize: "DATA_SDK",
        operateWXData: "DATA_SDK",
        getStorage: "STORAGE_SDK",
        setStorage: "STORAGE_SDK",
        clearStorage: "STORAGE_SDK",
        getStorageSync: "STORAGE_SDK",
        setStorageSync: "STORAGE_SDK",
        clearStorageSync: "STORAGE_SDK",
        redirectTo: "NAVIGATOR_SDK",
        navigateTo: "NAVIGATOR_SDK",
        navigateBack: "NAVIGATOR_SDK",
        setNavigationBarTitle: "UI_SDK",
        showNavigationBarLoading: "UI_SDK",
        hideNavigationBarLoading: "UI_SDK",
        getLocation: "LOCATION_SDK",
        openLocation: "LOCATION_SDK",
        getMusicPlayerState: "MUSIC_SDK",
        operateMusicPlayer: "MUSIC_SDK",
        scanCode: "SCAN_SDK",
        getNetworkType: "DEVICE_SDK",
        getSystemInfo: "DEVICE_SDK",
        chooseContact: "OTHER_SDK",
        saveFile: "FILE_SDK",
        chooseImage: "MEDIA_SDK",
        chooseVideo: "MEDIA_SDK"
    };
    _exports.getSdkType = function (t) {
        return e[t]
    }
}
var _exports;
init(), module.exports = _exports;