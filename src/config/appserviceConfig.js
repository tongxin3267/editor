"use strict";
module.exports = {
    AppserviceMaxDataSize: 1048576,
    HTTPSetting: {
        HTTPHeaderMode: "BlackList",
        HeaderBlackList: ["User-Agent"],
        HeaderWhiteList: [],
        UploadMaxTimeoutMS: 6e4,
        DownloadMaxTimeoutMS: 6e4,
        WebsocketMaxTimeoutMS: 6e4,
        RequestMaxTimeoutMS: 6e4,
        HTTPHeaderReferer: "servicewechat.com"
    },
    CDNBaseURL: "https://res.wx.qq.com/weapp",
    AppMaxRunningCount: 5
};