"use strict";
function getUserInfo(e) {
    if (!e)return {};
    var r = windowStores.getUserInfo() || {};
    return {
        nickName: r.nickName,
        avatarUrl: r.headUrl,
        sex: r.sex,
        province: r.province,
        city: r.city,
        contry: r.contry
    }
}
var sdkConfig = require("./sdkConfig.js"), windowStores = require(".././windowStores.js"), exec = function (e, r, o, n) {
    var t = r.sdkName, s = void 0;
    "getUserInfo" === t && (s = getUserInfo(e), n(s))
};
module.exports = {exec: exec};