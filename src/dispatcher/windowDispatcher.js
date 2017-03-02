"use strict";
function init() {
    var e = require("./windowStores.js");
    module.exports = function (a) {
        a.register(function (a) {
            switch (a.actionType) {
                case"WINDOW_RESIZE":
                    e.resize(a.height);
                    break;
                case"UPDATA_USER_INFO":
                    e.updateUserInfo(a.info);
                    break;
                case"CLEAR_USER_INFO":
                    e.clearUserInfo();
                    break;
                case"SET_AUTO_COMPLETET":
                    e.setAutoComplete(a.url);
                    break;
                case"FOCUS_ADDRESSBAR":
                    e.focusAddressBar(a.webviewID);
                    break;
                case"CLEAR_ADDRESSBAR_HISTORY":
                    e.clearAddressHistory(a.data);
                    break;
                case"BODY_CLICK":
                    e.bodyClick(a.event);
                    break;
                case"SHOW_SETTING":
                    e.showSetting();
                    break;
                case"SHOW_LOGIN_LAYER":
                    e.showLoginLayer();
                    break;
                case"SHOW_ABOUT_LAYER":
                    e.showAbout();
                    break;
                case"SHOW_JSON_VIEW":
                    e.showJSONview(a.data);
                    break;
                case"UPDATA_PROXY_SETTING":
                    e.updataProxySetting(a.proxyType, a.callback);
                    break;
                case"SHOW_TIPS_MSG":
                    e.showTipsMsg(a.opt);
                    break;
                case"CHANGE_DEVTOOLS":
                    e.changeDevtools();
                    break;
                case"UP_SDK_ERRNUM":
                    e.upSdkErrNum(a.webviewID, a.errNum);
                    break;
                case"UP_USER_TICKET":
                    e.upUserTikcet(a.newticket, a.ticketExpiredTime);
                    break;
                case"DEL_USER_TICKET":
                    e.delUserTicket();
                    break;
                case"DISABLE_URLBAR":
                    e.disAbleURLBar();
                    break;
                case"ABLE_URLBAR":
                    e.ableURLBar();
                    break;
                case"SAVE_SETTING":
                    e.saveSetting(a.data);
                    break;
                case"CHANGE_WEBVIEW_URL":
                    e.changeUrl(a.url, a.webviewID);
                    break;
                case"CLOSE_WEBVIEW_DEVTOOLS":
                    e.closeDevtools(a.webviewID);
                    break;
                case"OPEN_WEBVIEW_DEVTOOLS":
                    e.openDevtools(a.webviewID, a.webview, a.webviewOffset);
                    break;
                case"WINDOW_SET_WEBVIEW_INFO":
                    e.setInfo(a.data);
                    break;
                case"APP_ENTER_BACKGROUND":
                    e.appEnterBackground();
                    break;
                case"APP_ENTER_FOREGROUND":
                    e.appEnterForeground();
                    break;
                case"CLICK_TOOLSBAR":
                    e.clickToolsbar(a.clickkey);
                    break;
                case"OPERATE_MUSIC_PLAY":
                    e.operateMusicPlayer(a.opt);
                    break;
                case"GET_MUSIC_PLAY_STATE":
                    e.getMusicPlayState(a.callback);
                    break;
                case"START_WEBVIEW_DEBUGGEE":
                    e.startDebuggee(a.webviewID, a.data);
                    break;
                case"WINDOW_CHANGE_WEBVIEW_ID":
                    e.changeWebviewID(a.webviewID);
                    break;
                case"WINDOW_GET_WEBAPP_ERROR":
                    e.getWeappError(a.webviewID, a.url, a.errStr)
            }
        })
    }
}
init();