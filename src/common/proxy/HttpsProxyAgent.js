"use strict";
function HttpsProxyAgent(t) {
    Https.Agent.call(this, t), this.proxyHost = t.proxyHost, this.proxyPort = t.proxyPort, this.createConnection = function (e, o) {
        var r = Http.request({
            host: t.proxyHost,
            port: t.proxyPort,
            method: "CONNECT",
            path: e.host + ":" + e.port,
            headers: {host: e.host}
        });
        r.on("connect", function (t, r, s) {
            var n = Tls.connect({rejectUnauthorized: !1, host: e.host, socket: r}, function () {
                o(!1, n)
            })
        }), r.on("error", function (t) {
            o(t, null)
        }), r.end()
    }
}
var Util = require("util"), Https = require("https"), Http = require("http"), Tls = require("tls");
Util.inherits(HttpsProxyAgent, Https.Agent), HttpsProxyAgent.prototype.addRequest = function (t, e) {
    var o = e.host + ":" + e.port;
    e.path && (o += ":" + e.path), this.sockets[o] || (this.sockets[o] = []), this.sockets[o].length < this.maxSockets ? this.createSocket(o, e.host, e.port, e.path, t, function (e) {
        t.onSocket(e)
    }) : (this.requests[o] || (this.requests[o] = []), this.requests[o].push(t))
}, HttpsProxyAgent.prototype.createSocket = function (t, e, o, r, s, n) {
    var i = this, c = Util._extend({}, i.options);
    if (c.port = o, c.host = e, c.localAddress = r, c.servername = e, s) {
        var p = s.getHeader("host");
        p && (c.servername = p.replace(/:.*$/, ""))
    }
    i.createConnection(c, function (c, p) {
        if (c) {
            if (c.message += " while connecting to HTTP(S) proxy server " + i.proxyHost + ":" + i.proxyPort, !s)throw c;
            return void s.emit("error", c)
        }
        i.sockets[t] || (i.sockets[t] = []), i.sockets[t].push(p);
        var h = function () {
            i.emit("free", p, e, o, r)
        }, u = function (s) {
            i.removeSocket(p, t, e, o, r)
        }, a = function l() {
            i.removeSocket(p, t, e, o, r), p.removeListener("close", u), p.removeListener("free", h), p.removeListener("agentRemove", l)
        };
        p.on("free", h), p.on("close", u), p.on("agentRemove", a), n(p)
    })
}, module.exports = HttpsProxyAgent;