const {Menu, dialog} = require('electron').remote
const openFolder = require("./openFolder")
const template = [
    {
        label: '文件(F)',
        submenu: [
            {
                label: '打开文件夹(F)',
                click:openFolder
            },
            {
                label: '退出(X)',
                role:"close"
            }
        ]
    },
    {
        label: '编辑(E)',
        submenu: [
            {
                label: '剪切(T)',
                role:"cut"
            },
            {
                label: '复制(C)',
                role: 'copy'
            },
            {
                label: '粘贴(P)',
                role: 'paste'
            }
        ]
    },
    {
        label: '查看(V)',
        submenu: [
            {
                label: '调试控制台(B)',
                role: 'toggledevtools'
            }
        ]
    },
    {
        label: '帮助(H)',
        submenu: [
            {
                label: '开放平台',
                click () { require('electron').shell.openExternal('http://open.zhaopin.com') }
            }
        ]
    }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)