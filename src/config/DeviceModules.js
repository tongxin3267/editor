"use strict";
var version = global.appVersion;
module.exports = {
    "iPhone 4": {
        title: "iPhone 4",
        os: "iOS",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/" + version + " MicroMessenger/{{version}} Language/zh_CN webview/{{webviewID}}",
        screen: {horizontal: {width: 480, height: 320}, "device-pixel-ratio": 1, vertical: {width: 320, height: 480}}
    },
    "iPhone 4s": {
        title: "iPhone 4s",
        os: "iOS",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/" + version + " MicroMessenger/{{version}} Language/zh_CN webview/{{webviewID}}",
        screen: {horizontal: {width: 480, height: 320}, "device-pixel-ratio": 2, vertical: {width: 320, height: 480}}
    },
    "iPhone 5": {
        title: "iPhone 5",
        os: "iOS",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/" + version + " MicroMessenger/{{version}} Language/zh_CN webview/{{webviewID}}",
        screen: {horizontal: {width: 568, height: 320}, "device-pixel-ratio": 2, vertical: {width: 320, height: 568}}
    },
    "iPhone 6": {
        title: "iPhone 6",
        os: "iOS",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/" + version + " MicroMessenger/{{version}} Language/zh_CN webview/{{webviewID}}",
        screen: {horizontal: {width: 375, height: 667}, "device-pixel-ratio": 2, vertical: {width: 375, height: 667}}
    },
    "iPhone 6 Plus": {
        title: "iPhone 6 Plus",
        os: "iOS",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/" + version + " MicroMessenger/{{version}} Language/zh_CN webview/{{webviewID}}",
        screen: {horizontal: {width: 414, height: 736}, "device-pixel-ratio": 3, vertical: {width: 414, height: 736}}
    },
    "Galaxy S5": {
        title: "Galaxy S5",
        os: "Android",
        "user-agent": "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36 wechatdevtools/" + version + " MicroMessenger/{{version}} webview/{{webviewID}}",
        screen: {horizontal: {width: 640, height: 384}, "device-pixel-ratio": 3, vertical: {width: 384, height: 640}}
    },
    "Galaxy Note II": {
        title: "Galaxy Note II",
        os: "Android",
        "user-agent": "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 wechatdevtools/" + version + " MicroMessenger/{{version}} webview/{{webviewID}}",
        screen: {horizontal: {width: 640, height: 360}, "device-pixel-ratio": 2, vertical: {width: 360, height: 640}}
    },
    "Nexus 4": {
        title: "Nexus 4",
        os: "Android",
        "user-agent": "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36 wechatdevtools/" + version + " MicroMessenger/{{version}} webview/{{webviewID}}",
        screen: {horizontal: {width: 640, height: 384}, "device-pixel-ratio": 2, vertical: {width: 384, height: 640}}
    },
    "Nexus 5": {
        title: "Nexus 5",
        os: "Android",
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36 wechatdevtools/" + version + " MicroMessenger/{{version}} webview/{{webviewID}}",
        screen: {horizontal: {width: 360, height: 640}, "device-pixel-ratio": 3, vertical: {width: 360, height: 640}}
    },
    "Nexus 5x": {
        title: "Nexus 5x",
        os: "Android",
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36 wechatdevtools/" + version + " MicroMessenger/{{version}} webview/{{webviewID}}",
        screen: {
            horizontal: {width: 731, height: 411},
            "device-pixel-ratio": 2.625,
            vertical: {width: 411, height: 731}
        }
    },
    "Nexus 6": {
        title: "Nexus 6",
        os: "Android",
        "user-agent": "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36 wechatdevtools/" + version + " MicroMessenger/{{version}} webview/{{webviewID}}",
        screen: {horizontal: {width: 732, height: 412}, "device-pixel-ratio": 3.5, vertical: {width: 412, height: 732}}
    }
};