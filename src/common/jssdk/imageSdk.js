"use strict";
function imagePreview(e, a) {
    return e ? {errMsg: "imagePreview:ok"} : {errMsg: "imagePreview:" + sdkConfig.failWroding}
}
function chooseImage(e, a) {
    return e ? {
        errMsg: "chooseImage:ok",
        localIds: ["wxLocalResource://imageid123456789987654321", "wxLocalResource://imageid987654321123456789"]
    } : {errMsg: "chooseImage:" + sdkConfig.failWroding}
}
function uploadImage(e, a) {
    return e ? a.localId ? {
        errMsg: "uploadImage:ok",
        serverId: "1237378768e7q8e7r8qwesafdasdfasdfaxss111"
    } : {errMsg: "uploadImage::fail,missing localId"} : {errMsg: "uploadImage:" + sdkConfig.failWroding}
}
function downloadImage(e, a) {
    return e ? a.serverId ? {
        errMsg: "downloadImage:ok",
        localId: "wxLocalResource://1237378768e7q8e7r8qwe"
    } : {errMsg: "downloadImage:fail,missing serverId"} : {errMsg: "downloadImage:" + sdkConfig.failWroding}
}
var sdkConfig = require("./sdkConfig.js"), exec = function (e, a, o, r) {
    var g = a.sdkName, s = void 0;
    "imagePreview" === g ? s = imagePreview(e, a.args) : "chooseImage" === g ? s = chooseImage(e, a.args) : "uploadImage" === g ? s = uploadImage(e, a.args) : "downloadImage" === g && (s = downloadImage(e, a.args)), r(s)
};
module.exports = {exec: exec};