"use strict";
function init() {
    var e = require("../../actions/webviewActions.js"), t = require(".././webviewStores.js"), r = require("../../actions/windowActions.js");
    _exports = {
        reBuild: function () {
            var r = t.getCurrentWebviewID();
            e.setWebviewAction(r, {act: "reBuild"})
        }, showAbout: function () {
            r.showAbout()
        }, reload: function () {
            var r = t.getCurrentWebviewID();
            e.setWebviewAction(r, {act: "reLoad"})
        }, goback: function () {
            var r = t.getCurrentWebviewID();
            e.setWebviewAction(r, {act: "goBack"})
        }, goforward: function () {
            var r = t.getCurrentWebviewID();
            e.setWebviewAction(r, {act: "goForward"})
        }, focusAddressBar: function () {
            var e = t.getCurrentWebviewID();
            r.focusAddressBar(e)
        }, showSetting: function () {
            r.showSetting()
        }
    }
}
var _exports;
init(), module.exports = _exports;