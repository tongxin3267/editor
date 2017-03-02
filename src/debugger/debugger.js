"use strict";
function init() {
    function e(e, n, t, o) {
        t ? chrome["debugger"].sendCommand(e, n, t, o) : chrome["debugger"].sendCommand(e, n, o)
    }

    function n(e, n, t) {
        var o = e.targetId;
        u[o] && u[o].onEventCall(e, n, t)
    }

    function t(e, n) {
        var t = e.targetId;
        u[t] && (u[t].onDetachCall(e, n), delete u[t])
    }

    function o(e, n, t, o, i) {
        function a(e) {
            chrome["debugger"].getTargets(function (n) {
                e(null, n)
            })
        }

        function d(n, t) {
            var r = n.find(function (n) {
                return n.url === e.src
            }), a = {targetId: r.id};
            chrome["debugger"].attach(a, "1.1", function () {
                u[a.targetId] = {onEventCall: o, onDetachCall: i}, t(null, a)
            })
        }

        function c(e, n) {
            chrome["debugger"].sendCommand(e, "DOM.enable", function () {
                n(null, e)
            })
        }

        function l(e, n) {
            chrome["debugger"].sendCommand(e, "CSS.enable", function () {
                n(null, e)
            })
        }

        function g(e, n) {
            chrome["debugger"].sendCommand(e, "Emulation.setTouchEmulationEnabled", {
                enabled: !0,
                configuration: "mobile"
            }, function () {
                n(null, e)
            })
        }

        function m(e, t) {
            var o = n.webviewOffset;
            chrome["debugger"].sendCommand(e, "Emulation.setDeviceMetricsOverride", {
                width: parseInt(o.width),
                height: parseInt(o.height),
                deviceScaleFactor: o.dpr,
                mobile: !0,
                fitWindow: !1
            }, function () {
                t(null, e)
            })
        }

        var s = [];
        s.push(a), s.push(d), s.push(c), s.push(l), s.push(g), s.push(m), r.waterfall(s, function (e, n) {
            t && t(n)
        })
    }

    var r = require("async"), u = (chrome["debugger"], {});
    chrome["debugger"].onEvent.addListener(n), chrome["debugger"].onDetach.addListener(t), _exports = {
        start: o,
        sendCommand: e
    }
}
var _exports;
init(), module.exports = _exports;