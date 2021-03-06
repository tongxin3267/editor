"use strict";
function init() {
    var e = localStorage.getItem("urlConfig");
    e = e ? JSON.parse(e) : {};
    var i = e.webdebugger_geta8key || "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/geta8key", t = e.webdebugger_preverify || "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/preverify", g = e.wechat_login || "https://open.weixin.qq.com/connect/qrconnect?appid=wxde40e023744664cb&redirect_uri=https%3a%2f%2fmp.weixin.qq.com%2fdebug%2fcgi-bin%2fwebdebugger%2fqrcode&scope=snsapi_login&state=login#wechat_redirect", o = e.webdebugger_clientreport || "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/clientreport", r = e.webdebugger_download || "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download", c = e.refresh_ticket || "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/refreshticket", a = "https://servicewechat.com/";
    module.exports = {
        LOADCONFIG_URL: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/loadconfig",
        GET8KEY_URL: global.appConfig.GET8KEY_URL || i,
        PREVERIFY_URL: global.appConfig.PREVERIFY_URL || t,
        LOGIN_URL: global.appConfig.LOGIN_URL || g,
        CLIENTREPORT_URL: o,
        DOWNLOAD_URL: r,
        refreshTicketURL: c,
        batchAddCardURL: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/getcarditeminfo",
        chooseCardURL: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/getavailablecard",
        batchViewCardURL: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/batchgetcarditembytpinfo",
        createWeappURL: a + "wxa-dev-logic/getappinfo",
        newReportURL: a + "wxa-dev-logic/clientreport",
        getWeappAttrURL: a + "wxa-dev-logic/batchgetappattr",
        jsLoginURL: a + "wxa-dev-logic/jslogin",
        jsOperateWXDATAURL: a + "wxa-dev-logic/jsoperatewxdata",
        jsAuthorizeURL: a + "wxa-dev-logic/jsauthorize",
        jsAuthorizeConfirmURL: a + "wxa-dev-logic/jsauthorize-confirm",
        testSourceURL: a + "wxa-dev/testsource",
        commitSourceURL: a + "wxa-dev/commitsource",
        downloadRedirectURL: a + "wxa-dev-logic/download_redirect",
        touristCreateURL: a + "wxa-dev-logic/createtourist"
    }
}
init();