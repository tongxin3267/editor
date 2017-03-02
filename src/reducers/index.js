/**
 * Created by daishun on 2017/2/20.
 */
const  {combineReducers} = require("../lib/redux");
const project= require("./projectReducer");
const editor= require("./editorReducer");

module.exports=combineReducers({project,editor});