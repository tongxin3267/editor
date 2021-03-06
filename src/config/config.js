"use strict";
function init() {
    var e = global.appVersion;
    module.exports = {
        weappURLRegular: /^https?\:\/\/.*?\.debug.open.weixin.qq.com/,
        weappASURLRegular: /^https?\:\/\/.*?\.appservice.open.weixin.qq.com/,
        defaultWechatVersion: "6.3.9",
        defaultUa: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/" + e + " MicroMessenger/{{version}} Language/zh_CN webview/{{webviewID}}",
        Android_useragent: "Mozilla/5.0 (Linux; Android 4.4.4; AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38 Mobile Safari/537.36 wechatdevtools/" + e + " MicroMessenger/{{version}} webview/{{webviewID}}"
    }
}
init();