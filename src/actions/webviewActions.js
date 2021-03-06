"use strict";
function init() {
    var e = require("../dispatcher/dispatcher.js"), i = {
        cleanWebview: function (i) {
            e.dispatch({actionType: "ClEAN_WEBVIEW", webviewID: i})
        }, deleteWebviewID: function (i) {
            e.dispatch({actionType: "DELETE_WEBVIEW_ID", webviewID: i})
        }, changeWebviewID: function (i) {
            e.dispatch({actionType: "CHANGE_WEBVIEW_ID", webviewID: i})
        }, setWebviewSnapshot: function (i, t) {
            e.dispatch({actionType: "SET_WEBVIEW_SNAPSHOT", webviewID: i, data: t})
        }, setInitURL: function (i) {
            e.dispatch({actionType: "SET_INIT_URL", URL: i})
        }, webviewErr: function (i, t) {
            e.dispatch({actionType: "UP_WEBVIEW_ERRNUM", webviewID: i, errNum: t})
        }, clearWebview: function (i) {
            e.dispatch({actionType: "CLEAR_WEBVIEW_DATA", data: i})
        }, upWebviewStatus: function (i, t) {
            e.dispatch({webviewID: i, actionType: "UP_WEBVIEW_STATUS", data: t})
        }, setWebviewAction: function (i, t) {
            e.dispatch({webviewID: i, actionType: "SET_WEBVIEW_ACTION", data: t})
        }, execWebviewJSSDK: function (i, t) {
            e.dispatch({webviewID: i, actionType: "EXEC_WEBVIEW_JSSDK", data: t})
        }, getA8keyWebview: function (i, t) {
            e.dispatch({webviewID: i, actionType: "GET_A8KEY_WEBVIEW", data: t})
        }, showShareWebview: function (i, t) {
            e.dispatch({webviewID: i, actionType: "SHOW_SHARE_WEBVIEW", data: t})
        }, setWebviewUA: function (i) {
            e.dispatch({actionType: "SET_WEBVIEW_UA", data: i})
        }, setWebviewInfo: function (i) {
            e.dispatch({actionType: "SET_WEBVIEW_INFO", data: i})
        }, setSdkLog: function (i, t, a, n, c) {
            e.dispatch({actionType: "GET_JASSDK_LOG", webviewID: i, data: t, isHavePurview: a, sdkRes: n, sdkResExt: c})
        }, sendJSSDKRes: function (i, t, a, n) {
            e.dispatch({actionType: "GET_JSSDK_RES", webviewID: i, sdkName: t, sdkRes: a, sdkResExt: n})
        }, setInterfaceFromPageFrame: function (i, t) {
            e.dispatch({actionType: "SET_INTERFACT_FROMPAGEFRAME", webviewID: i, header: t})
        }, asTojs: function (i) {
            e.dispatch({actionType: "AS_TO_JS", data: i})
        }, upASData: function (i, t) {
            e.dispatch({actionType: "UP_AS_DATA", data: t, appid: i})
        }, asPublish: function (i) {
            e.dispatch({actionType: "AS_PUBLISH", msg: i})
        }, postMessageToAS: function (i) {
            e.dispatch({actionType: "POST_MSG_TOAS", msg: i})
        }, sendASSDK: function (i, t, a) {
            e.dispatch({actionType: "SEND_AS_SDK", api: i, data: t, callback: a})
        }, authorizeSdk: function (i, t, a, n, c) {
            e.dispatch({
                actionType: "SHOW_AUTHORIZE_SDK_DIALOG",
                webviewId: i,
                authorizeSdkId: t,
                appicon_url: a,
                appname: n,
                scope_list: c
            })
        }, authorizeSdkReturn: function (i, t, a) {
            e.dispatch({actionType: "AUTHORIZE_SDK_RETURN", authorizeSdkId: i, scope_list: t, isAllowed: a})
        }, showScanCodeDialog: function (i) {
            e.dispatch({actionType: "SHOW_SCAN_CODE_DIALOG", args: i})
        }, scanCodeReturn: function (i) {
            e.dispatch({actionType: "SCAN_CODE_RETURN", args: i})
        }
    };
    _exports = i
}
var _exports;
init(), module.exports = _exports;