"use strict";
function init() {
    var e = require("./projectStores.js");
    module.exports = function (t) {
        t.register(function (t) {
            switch (t.actionType) {
                case"ADD_PROJECT":
                    e.add(t.project, t.needInitQuickStart);
                    break;
                case"DELETE_PROJECT":
                    e.del(t.projectid);
                    break;
                case"CLOSE_PROJECT":
                    e.close();
                    break;
                case"RESTART_PROJECT":
                    e.restart(t.project)
            }
        })
    }
}
init();