/**
 * Created by daishun on 2017/2/20.
 */
module.exports=function (root) {

    return (`
module.exports={
    root:${JSON.stringify(root)}
}
    `);
}