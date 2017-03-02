/**
 * Created by daishun on 2017/2/16.
 */
const {createStore} =require("../lib/redux");
const reducer = require("../reducers")

module.exports=createStore(reducer);