/**
 * Created by daishun on 2017/2/20.
 */
const fs = require("fs");
const store = require("../store");

const {CHANGE_CURRENT_FILE} = require("../actions/editorActions")

var preVersion = "";

store.subscribe(function () {
    console.log(store.getState())
    var html="";
    var {file,version} = store.getState().project;
    if(preVersion==version){
        return;
    }
    preVersion=version;
    file.children.forEach(function (File) {
        if(File.isDirectory){
            html+= createFolder(File);
        }else{
            html+= createFile(File)
        }

    })
    document.querySelector("#file_container ul").innerHTML=html;
    $(".hitarea").click(show);
    $(".file").click(function () {
        CHANGE_CURRENT_FILE(JSON.parse($(this).attr("data-file")))
    });
})

function show() {
    $(this).parent().removeClass("expandable").removeClass("closed").addClass("collapsable")
    $(this).parent().children("div").removeClass("closed-hitarea").removeClass("expandable-hitarea").addClass("collapsable-hitarea");
    $(this).parent().children("ul").show();
    this.removeEventListener("click",show);
    this.addEventListener("click",hide);
}

function hide() {
    $(this).parent().removeClass("collapsable").addClass("expandable").addClass("closed")
    $(this).parent().find("div").addClass("closed-hitarea").addClass("expandable-hitarea").removeClass("collapsable-hitarea");
    $(this).parent().find("ul").hide();
    this.removeEventListener("click",hide);
    this.addEventListener("click",show);
    $(this).parent().find(".hitarea").map(function (i,v) {
        v.removeEventListener("click",hide);
        v.addEventListener("click",show);
    })
}


function createFile(File) {
    return `<li class="last"><span class="file" data-file='${JSON.stringify(File)}'>${File.base}</span></li>`;
}

function createFolder(File) {
    var html="";
    File.children.forEach(function (File2) {
        if(File2.isDirectory){
            html+= createFolder(File2);
        }else{
            html+= createFile(File2)
        }
    })
    return ` <li class="treefl closed expandable" >
                <div class="hitarea closed-hitarea expandable-hitarea" data-file='${JSON.stringify(File)}' style="cursor: default"></div>
                <span class="folder">${File.base}</span>
                 <ul style="display: none;">
                   ${html}
                 </ul>
              </li>`;
}

// function readFile(File) {
//     CHANGE_CURRENT_FILE(File)
//     fs.readFile(File.path,'utf8', (err, data) => {
//         if (err) throw err;
//         CHANGE_CURRENT_FILE(File)
//         // showFile(File,data);
//     });
// }




