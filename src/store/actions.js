import * as types from './types'; 
export default{
    increment:({commit})=>{
        commit(types.INCREMENT);
    },
    reduce:({commit})=>{
        commit(types.REDUCE)
    },
    clickodd:({commit,state})=>{
        if (state.mutations.count % 2 == 0) {
            commit(types.INCREMENT);
        }
    },
    clickAsync:({commit})=>{
        new Promise((resolve)=>{
            setTimeout(()=>{
                commit(types.INCREMENT);
            },1000)
        })
    }
}