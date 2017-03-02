/**
 * Created by daishun on 2017/2/17.
 */
const fs = require("fs");
const path = require("path");

function File(root) {
    const stat = fs.statSync(root);
    this.isDirectory = stat.isDirectory();
    this.children = [];
    const obj = path.parse(root)
    this.base = obj.base;
    this.name = obj.name;
    this.ext = obj.ext;
    this.path = root;
    if(this.isDirectory){
        const files = fs.readdirSync(root);
        for(var i=0;i<files.length;i++){
            if(files[i]==".temp")
                continue;
            this.children.push(new File(root+"/"+files[i]));
        }
    }
    this.children.sort(function (a,b) {
        if(a.isDirectory&&b.isDirectory){
            return a.base-b.base;
        }else if(a.isDirectory&&!b.isDirectory){
            return -1;
        }else if(!a.isDirectory&&b.isDirectory){
            return 1;
        }else if(!a.isDirectory&&!b.isDirectory){
            return a.base-b.base;
        }
        return 0;
    })
    return this;
}

module.exports=File;