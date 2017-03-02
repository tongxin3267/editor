"use strict";
function postMessageToNW(e) {
    return e.webviewID = webviewID, portInit ? void port.postMessage(e) : void portMsgQuery.push(e)
}
function postMessageToWebPage(e) {
    return postMessageInit ? (e.webviewID = webviewID, void window.postMessage(e, "*")) : void postMessageQuery.push(e)
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
}, ua = navigator.userAgent, webviewID = parseInt(ua.match(/webview\/(\d*)/)[1]);
window.runtime = {};
var portInit = !1, postMessageInit = !1, portMsgQuery = [], postMessageQuery = [], port = window.runtime.port = chrome.runtime.connect("", {name: "webview" + webviewID});
port.onMessage.addListener(function (e) {
    var o = e.to;
    "contentscript" === o ? handleMsg(e) : "webframe" === o ? postMessageToWebPage(e) : "appservice" === o && postMessageToWebPage(e)
}), window.addEventListener("message", function (e) {
    var o = e.data;
    if ("object" === ("undefined" == typeof o ? "undefined" : _typeof(o)) && o.webviewID === webviewID) {
        var t = o.comefrom, s = o.to;
        if ("webframe" === t) {
            var n = o.command;
            "contentscript" === s && "SHAKE_HANDS" === n ? (postMessageInit = !0, postMessageQuery.length && (postMessageQuery.forEach(function (e) {
                postMessageToWebPage(e)
            }), postMessageQuery = [])) : receiveMessageFromPageFrame(o)
        }
    }
});