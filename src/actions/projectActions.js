"use strict";
const store = require("../store");

module.exports={
    CHANGE_PROJECT:function (file) {
        store.dispatch({type:"CHANGE_PROJECT",file})
    }
}