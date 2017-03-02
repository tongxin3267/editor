/**
 * Created by daishun on 2017/2/20.
 */
const store = require("../store");

module.exports={
    CHANGE_CURRENT_FILE:function (file) {
        store.dispatch({type:"CHANGE_CURRENT_FILE",file})
    }
}