"use strict";
function postMessageToNW(e) {
    return portInit ? void port.postMessage(e) : void portMsgQuery.push(e)
}
function postMessageToWebPage(e) {
    return postMessageInit ? void window.postMessage(e, "*") : void postMessageQuery.push(e)
}
function handleMsg(e) {
    var o = e.command;
    "SHAKE_HANDS" === o && (portInit = !0, portMsgQuery.length && (portMsgQuery.forEach(function (e) {
        postMessageToNW(e)
    }), portMsgQuery = []))
}
function receiveMessageFromPageFrame(e) {
    "backgroundjs" === e.to && postMessageToNW(e)
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}, portInit = !1, postMessageInit = !1, portMsgQuery = [], postMessageQuery = [], port = chrome.runtime.connect("", {name: "edit"});
port.onMessage.addListener(function (e) {
    var o = e.to;
    "contentscript" === o ? handleMsg(e) : "webframe" === o && postMessageToWebPage(e)
}), window.addEventListener("message", function (e) {
    var o = e.data;
    if ("object" === ("undefined" == typeof o ? "undefined" : _typeof(o))) {
        var t = o.to, s = o.command;
        "contentscript" === t && "SHAKE_HANDS" === s ? (postMessageInit = !0, postMessageQuery.length && (postMessageQuery.forEach(function (e) {
            postMessageToWebPage(e)
        }), postMessageQuery = [])) : "backgroundjs" === t && receiveMessageFromPageFrame(o)
    }
});