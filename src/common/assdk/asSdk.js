"use strict";
function init() {
    var e = require("./asSdkConfig.js"), r = require("./storageSdk.js"), S = require("./navigatorSdk.js"), i = require("./uiSdk.js"), s = require("./locationSdk.js"), c = require("./deviceSdk.js"), u = require("./accountSdk.js"), d = require("./dataSdk.js"), t = require("./musicSdk.js"), x = require("./scanSdk.js"), _ = require("./otherSdk.js"), k = require("./mediaSdk.js"), o = require("./fileSdk.js");
    _exports = {}, _exports.exec = function (D, a) {
        var j = D.sdkName, q = e.getSdkType(j);
        "STORAGE_SDK" === q ? r.exec(D, a) : "NAVIGATOR_SDK" === q ? S.exec(D, a) : "UI_SDK" === q ? i.exec(D, a) : "LOCATION_SDK" === q ? s.exec(D, a) : "DEVICE_SDK" === q ? c.exec(D, a) : "ACCOUNT_SDK" === q ? u.exec(D, a) : "DATA_SDK" === q ? d.exec(D, a) : "MUSIC_SDK" === q ? t.exec(D, a) : "SCAN_SDK" === q ? x.exec(D, a) : "OTHER_SDK" === q ? _.exec(D, a) : "MEDIA_SDK" === q ? k.exec(D, a) : "FILE_SDK" === q && o.exec(D, a)
    }
}
var _exports;
init(), module.exports = _exports;