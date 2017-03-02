"use strict";
var log = require("../log/log.js"), urlConfig = require("../../config/urlConfig.js"), errocodeConfig = require("../../config/errcodeConfig.js"), batchAddCardURL = urlConfig.batchAddCardURL, chooseCardURL = urlConfig.chooseCardURL, batchViewCardURL = urlConfig.batchViewCardURL, exec = function (r, e, a, d) {
    var i = require("../request/request.js"), o = e.sdkName, s = e.args, t = s.appId;
    if ("batchAddCard" === o)!function () {
        for (var r = s.card_list || [], e = {}, a = [], o = 0, n = r.length; o < n; o++) {
            var c = r[o];
            e[c.card_id] ? e[c.card_id]++ : (a.push(c), e[c.card_id] = 1)
        }
        var g = {appid: t, getitem_list: a}, l = {
            url: batchAddCardURL,
            body: JSON.stringify(g),
            method: "post",
            needToken: 1
        };
        log.info("cardSdk.js batchAddCard begin " + JSON.stringify(l)), i(l, function (r, a, i) {
            if (r)log.error("cardSdk.js batchAddCard error " + JSON.stringify(r)), d(r); else {
                log.info("cardSdk.js batchAddCard get " + i);
                var o = JSON.parse(i), s = o.baseresponse, t = s.errcode;
                if (0 === t) {
                    var n = o.json_ret_list.map(function (r) {
                        return r = JSON.parse(r), r.amount = e[r.card_tp_id], r
                    });
                    d(null, n)
                } else d(s, [])
            }
        })
    }(); else if ("chooseCard" === o) {
        var n = {
            appid: t,
            shop_id: s.location_id || 0,
            sign_type: s.sign_type,
            card_sign: s.card_sign,
            time_stamp: s.time_stamp,
            nonce_str: s.nonce_str,
            card_tp_id: s.card_id,
            card_type: s.card_type
        }, c = {url: chooseCardURL, body: JSON.stringify(n), method: "post", needToken: 1};
        log.info("cardSdk.js chooseCard begin " + JSON.stringify(c)), i(c, function (r, e, a) {
            if (r)log.error("cardSdk.js chooseCard error " + JSON.stringify(r)), d(r); else {
                log.info("cardSdk.js chooseCard get " + a);
                var i = JSON.parse(a), o = i.baseresponse;
                0 === o.errcode ? d(null, JSON.parse(i.json_ret)) : d(o, [])
            }
        })
    } else if ("batchViewCard" === o) {
        s.card_list = s.card_list || [];
        var g = s.card_list.map(function (r) {
            return {card_tp_id: r.card_id, code: r.code}
        }), l = {appid: t, items: g}, f = {
            url: batchViewCardURL,
            body: JSON.stringify(l),
            method: "post",
            needToken: 1
        };
        log.info("cardSdk.js batchViewCard begin " + JSON.stringify(f)), i(f, function (r, e, a) {
            if (r)log.error("cardSdk.js batchViewCard error " + JSON.stringify(r)), d(r); else {
                log.info("cardSdk.js batchViewCard get " + a);
                var i = JSON.parse(a), o = i.baseresponse;
                if (0 === o.errcode) {
                    var s = i.json_ret ? JSON.parse(i.json_ret) : {card_array: []}, t = i.error_json_ret_list.map(function (r) {
                        return JSON.parse(r)
                    }), n = {retData: s, errData: t};
                    d(null, n)
                } else d(o, [])
            }
        })
    }
};
module.exports = {exec: exec};