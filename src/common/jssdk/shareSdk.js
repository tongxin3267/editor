"use strict";
var exec = function (e, r, t, c) {
    var s = e && r.args ? r.args : r.ext;
    delete s.origin, c(s)
};
module.exports = {exec: exec};