"use strict";
function geoLocation(o, e, t) {
    var n = require("../request/request.js");
    o ? n({
        url: "http://apis.map.qq.com/ws/location/v1/ip?key=JMRBZ-R4HCD-X674O-PXLN4-B7CLH-42BSB",
        needToken: -1
    }, function (o, e, n) {
        var i = {};
        o || 200 !== e.statusCode || (n = JSON.parse(n), 0 == n.status && (i = {
            latitude: n.result.location.lat,
            longitude: n.result.location.lng
        }, i.errMsg = "getLocation:ok")), i.errMsg || (i.errMsg = "getLocation:fail; timeout"), t(i)
    }) : t({errMsg: "geoLocation:" + sdkConfig.failWroding})
}
function openLocation(o, e) {
    return o ? {errMsg: "openLocation:ok"} : {errMsg: "openLocation:" + sdkConfig.failWroding}
}
var sdkConfig = require("./sdkConfig.js"), exec = function (o, e, t, n) {
    var i = e.sdkName, r = void 0;
    "geoLocation" === i ? geoLocation(o, e.args, n) : "openLocation" === i && (r = openLocation(o, e.args), n(r))
};
module.exports = {exec: exec};