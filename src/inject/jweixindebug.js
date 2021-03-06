"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
};
!function () {
    function e() {
        try {
            if (Object.defineProperty) {
                var e = function () {
                    return f ? "iPhone" : "Android"
                };
                Object.defineProperty(navigator, "platform", {get: e})
            }
        } catch (n) {
        }
    }

    function n(e, n, t, i) {
        var o = {to: e, msg: n, command: t, ext: i};
        o.comefrom = "webframe", o.webviewID = d, o = JSON.parse(JSON.stringify(o)), window.postMessage(o, "*")
    }

    function t(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2], o = {
            sdkName: e,
            args: t
        }, r = {
            isOn: i,
            url: location.href,
            title: document.title,
            desc: document.title,
            img_url: document.images.length ? document.images[0].src : l,
            link: void 0
        };
        n("backgroundjs", o, m, r)
    }

    function i(e) {
        var n = e.type, t = e.sdkName;
        if ("REGISTER_SDK" === n)console.info("[JSSDK Info] 注册 %c %s", "color:blue", t); else {
            var i = e.isErr;
            if (i) {
                var o = b[t] || t;
                if (!I[o])return;
                console.error("[JSSDK Error] %s \ninput %s;\noutput %s", t, JSON.stringify(e.inputArgs || {}), JSON.stringify(e.sdkRes || {}))
            } else console.info("[JSSDK Info]%c %s %c \ninput %c %s; %c \noutput %c %s", "color:blue", t, "color:black", "color:purple", JSON.stringify(e.inputArgs || {}), "color:black", "color:purple", JSON.stringify(e.sdkRes || {}))
        }
    }

    function o(e, n) {
        I[e] && I[e].fn ? I[e].fn(n) : S[e] && t(S[e])
    }

    function r(e, n) {
        window.WeixinJSBridge ? o(e, n) : document.addEventListener("WeixinJSBridgeReady", function () {
            o(e, n)
        })
    }

    function a(e) {
        var n = (e.data, e.eventName);
        h._subscribe[n] && h._subscribe[n](e.data)
    }

    function c() {
        window.WeixinJSBridge = h;
        var e = document.createEvent("UIEvent");
        e.initEvent("WeixinJSBridgeReady", !1, !1), document.dispatchEvent(e), n("contentscript", {}, p)
    }

    var s = navigator.userAgent;
    if (s.indexOf("wechatdevtools") !== -1) {
        window.nw = void 0;
        var d = parseInt(s.match(/webview\/(\d*)/)[1]), u = s.indexOf("Android") !== -1, f = s.indexOf("iPhone") !== -1, l = "http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRt8Qia4lv7k3M9J1SKqKCImxJCt7j9rHYicKDI45jRPBxdzdyREWnk0ia0N5TMnMfth7SdxtzMvVgXg/0", m = "EXEC_JSSDK", v = "TO_APP_SERVICE", p = "SHAKE_HANDS", g = "COMMAND_GET_TITLE", E = {
            reportKeyValue: !0,
            initReady: !0,
            reportIDKey: !0,
            systemLog: !0
        }, S = {
            "menu:share:timeline": "shareTimeline",
            "menu:share:appmessage": "sendAppMessage",
            "menu:share:qq": "shareQQ",
            "menu:share:weiboApp": "shareWeiboApp",
            "menu:share:QZone": "shareQZone"
        }, b = {
            shareTimeline: "menu:share:timeline",
            sendAppMessage: "menu:share:appmessage",
            shareQQ: "menu:share:qq",
            shareWeiboApp: "menu:share:weiboApp",
            shareQZone: "menu:share:QZone",
            config: "preVerifyJSAPI"
        };
        e();
        var h = {}, I = h._debugCache = {}, _ = h._subscribe = {};
        h.invoke = function (e, n, i) {
            E[e] || /^__sys/.test || (I[e] = {fn: i}, t(e, n))
        }, h.on = function (e, n) {
            I[e] = {fn: n}, t(e, {}, !0)
        }, h.call = function () {
            console.error("WeixinJSBridge.call 不被支持，请参考 http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html 进行正确调用")
        }, h.log = function (e) {
            console.log(e)
        }, h.publish = function (e, t) {
            var i = {eventName: e, data: t};
            n("backgroundjs", i, v)
        }, h.subscribe = function (e, n) {
            _[e] = n
        }, window.addEventListener("message", function (e) {
            var t = e.data, o = t.msg;
            if ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t))) {
                var c = t.command;
                if ("webframe" === t.to && c && d === t.webviewID && "INIT_DEVTOOLS_SUCCESS" !== c) {
                    if ("MSG_FROM_APPSERVICE" === c)return void a(o);
                    if ("COMMAND_GET_TITLE" === c) {
                        var s = {title: document.title};
                        return void n("backgroundjs", s, g)
                    }
                    var f = o.sdkName, l = o.res || {};
                    u && ("checkJsApi" === f ? l.checkResult = JSON.stringify(l.checkResult) : "chooseImage" === f && (l.localIds = JSON.stringify(l.localIds))), "GET_JSSDK_RES" === c || "INVOKE_SDK" === c ? r(f, l) : "SHOW_CONSOLE_LOG" === c && i(o)
                }
            }
        }), "complete" === document.readyState ? c() : window.addEventListener("load", function (e) {
            c()
        })
    }
}(), function () {
    function e(e, n, t, i) {
        var o = {to: e, msg: t, command: n, ext: i};
        o = JSON.parse(JSON.stringify(o)), window.postMessage(o, "*")
    }

    function n() {
        var e = Math.random();
        return r[e] ? initMappingID() : e
    }

    function t() {
        window.EditBridge = a;
        var n = document.createEvent("UIEvent");
        n.initEvent("EditBridgeReady", !1, !1), document.dispatchEvent(n), e("contentscript", "SHAKE_HANDS", {})
    }

    var i = navigator.userAgent;
    if (i.indexOf("devtoolsedit") !== -1) {
        console.info("devtoolsedit"), window.addEventListener("message", function (e) {
            var n = e.data, t = n.to;
            if ("webframe" === t) {
                var i = n.command, a = n.msg, c = n.ext;
                if ("RETURN_RES" === i) {
                    var s = parseInt(a.ret), d = c.callID;
                    0 === s ? r[d](null, a.res) : r[d](a.ret, {})
                } else if ("FILE_CHANGE" === i) {
                    var u = a.eventType, f = a.fileName;
                    o && o(u, f)
                }
            }
        });
        var o, r = {}, a = {};
        a.on = function (e, n) {
            "FILE_CHANGE" === e && (o = n)
        }, a.getFileList = function (t, i) {
            var o = void 0, a = void 0;
            i ? (o = t, a = i) : (o = {}, a = t);
            var c = n();
            r[c] = a, e("backgroundjs", "GET_FILE_LIST", {options: o}, {callID: c})
        }, a.getFile = function (t, i) {
            var o = n();
            r[o] = i, e("backgroundjs", "GET_FILE_DATA", {path: t}, {callID: o})
        }, a.saveFile = function (t, i, o) {
            var a = n();
            r[a] = o, e("backgroundjs", "SAVE_FILE_DATA", {path: t, data: i}, {callID: a})
        }, a.addFile = function (t, i) {
            var o = n();
            r[o] = i, e("backgroundjs", "ADD_FILE", {path: t}, {callID: o})
        }, a.delFile = function (t, i) {
            var o = n();
            r[o] = i, e("backgroundjs", "DEL_FILE", {path: t}, {callID: o})
        }, a.rename = function (t, i, o) {
            var a = n();
            r[a] = o, e("backgroundjs", "RENAME_FILE", {oldPath: t, newPath: i}, {callID: a})
        }, a.mkdir = function (t, i) {
            var o = n();
            r[o] = i, e("backgroundjs", "MAKE_DIR", {path: t}, {callID: o})
        }, a.rmdir = function (t, i) {
            var o = n();
            r[o] = i, e("backgroundjs", "RM_DIR", {path: t}, {callID: o})
        }, a.getProjectInfo = function (t) {
            var i = n();
            r[i] = t, e("backgroundjs", "GET_PROJECT_INFO", {}, {callID: i})
        }, "complete" === document.readyState ? t() : window.addEventListener("load", function (e) {
            t()
        })
    }
}();