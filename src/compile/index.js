const {root} = require("./config");
const app = require(`${root}/app`).default;
const globalStyle =  require(`${root}/app.css`);
const config = require(`json!${root}/app.json`).default;
const React = require("react");
// import app from "../src/app";
// import globalStyle from "../src/app.css";
// import modules from "./modules";
// import config from "json!../src/app.json";
// import React from "react";
let appId=config.appId;
//resolve pages
let req=require.context(``, true, /^\.\/.*\.js$/);
// let [pages,config]=[{},require("json!../src/app.json")]
const pages={};
req.keys().forEach(function (mod) {
    let match = mod.match(/^\.\/([^_][\w-]+)\/([^_][\w-]+)\.js?$/);
    let pageName=match[1];
    let fileName = match[2];
    let pageObj=require(`../src/pages/${pageName}/${fileName}.js`);
    pageObj=pageObj.__esModule?pageObj["default"]:pageObj;
    pageObj.prototype.render=require(`zpin-templates!../src/pages/${pageName}/${fileName}.html`);
    let styles=require(`../src/pages/${pageName}/${fileName}.css`);
    for(var key in globalStyle){
        if(!styles.hasOwnProperty(key)){
            styles[key]=globalStyle[key];
        }
    }
    pageObj.prototype.styles=styles;
    pageObj.prototype.PAGEID=`${appId}_${pageName}`;
    pageObj.PAGEID=`${appId}_${pageName}`;
    pageObj.HTML=require(`html!../src/pages/${pageName}/${fileName}.html`);
    pageObj.contextTypes={
        store:React.PropTypes.any,
        projects:React.PropTypes.any
    }
    pages[pageName]=pageObj;
})



app.prototype.appId=appId;

app.childContextTypes ={
    store:React.PropTypes.any,
    projects:React.PropTypes.any
}

zp.register({appId,app,pages,modules,config})

module.exports={appId,app,pages,modules,config}
