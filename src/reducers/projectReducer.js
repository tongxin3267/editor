/**
 * Created by daishun on 2017/2/20.
 */
module.exports=(state={},action)=>{

    switch (action.type){

        case "CHANGE_PROJECT"://没有就新增，有就改变
            var {file} = action;
            var version = Math.random();
            return {file,version};
        default:
            return state;
    }
}