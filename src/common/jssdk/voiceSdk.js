"use strict";
function startRecord(o, e) {
    return o ? {errMsg: "startRecord:ok"} : {errMsg: "startRecord:" + sdkConfig.failWroding}
}
function stopRecord(o, e) {
    return o ? {
        errMsg: "stopRecord:ok",
        localId: "wxLocalResource://voiceLocalId1234567890123"
    } : {errMsg: "stopRecord:" + sdkConfig.failWroding}
}
function playVoice(o, e) {
    return o ? {errMsg: "playVoice:ok"} : {errMsg: "playVoice:" + sdkConfig.failWroding}
}
function pauseVoice(o, e) {
    return o ? e.localId ? {errMsg: "pauseVoice:ok"} : {errMsg: "pauseVoice::fail,missing localId"} : {errMsg: "pauseVoice:" + sdkConfig.failWroding}
}
function stopVoice(o, e) {
    return o ? e.localId ? {errMsg: "stopVoice:ok"} : {errMsg: "stopVoice::fail,missing localId"} : {errMsg: "stopVoice:" + sdkConfig.failWroding}
}
function uploadVoice(o, e) {
    return o ? e.localId ? {
        errMsg: "uploadVoice:ok",
        serverId: "1237378768e7q8e7r8qwesafdasdfasdfaxss111"
    } : {errMsg: "uploadVoice::fail,missing localId"} : {errMsg: "uploadVoice:" + sdkConfig.failWroding}
}
function downloadVoice(o, e) {
    return o ? e.serverId ? {
        errMsg: "downloadVoice:ok",
        localId: "wxLocalResource://voiceLocalId1234567890123"
    } : {errMsg: "downloadVoice:fail,missing serverId"} : {errMsg: "downloadVoice:" + sdkConfig.failWroding}
}
function translateVoice(o, e) {
    return o ? e.localId ? {
        errMsg: "translateVoice:ok",
        translateResult: "嗯，只是一个模拟调试的结果"
    } : {errMsg: "translateVoice:missing localId"} : {errMsg: "translateVoice:" + sdkConfig.failWroding}
}
var sdkConfig = require("./sdkConfig.js"), exec = function (o, e, r, s) {
    var i = e.sdkName, a = void 0;
    "startRecord" === i ? a = startRecord(o, e.args) : "stopRecord" === i ? a = stopRecord(o, e.args) : "playVoice" === i ? a = playVoice(o, e.args) : "pauseVoice" === i ? a = pauseVoice(o, e.args) : "stopVoice" === i ? a = stopVoice(o, e.args) : "uploadVoice" === i ? a = uploadVoice(o, e.args) : "downloadVoice" === i ? a = downloadVoice(o, e.args) : "translateVoice" === i && (a = translateVoice(o, e.args)), s(a)
};
module.exports = {exec: exec};