/**
 * Created by daishun on 2017/2/17.
 * 打开文件夹
 */
const {dialog} = require('electron').remote;
const fs = require("fs");
const projectActions = require("../actions/projectActions");
const File = require("../model/File")
const path = require("path");
const settings = require("../template/settings")

function openFolder() {
    const dir = dialog.showOpenDialog({properties: [ 'openDirectory'],defaultPath:"E:\\"});
    if(!dir)
        return;
    let root=dir[0];
    let temp = path.join(__dirname,"../../compile");
    fs.mkdir(temp, function (err) {
        fs.writeFile(path.join(temp,"config.js"),settings(root),function () {
            projectActions.CHANGE_PROJECT(new File(root))
        })
    })

}


module.exports=openFolder;
