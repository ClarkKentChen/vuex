import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
    count: 10
}
const mutations = {
    increment(state) {//处理数据的变化
        state.count++;
    },
    reduce(state) {
        state.count--;
    },
    clickAsycn() {

    }
}
const actions = {
    increment: ({ commit }) => {//处理你要干什么，异步请求 判断 流程控制
        // alert('111');
        commit('increment')
    },
    reduce: ({ commit }) => {
        commit('reduce')
    },
    clickodd: ({ commit, state }) => {
        if (state.count % 2 == 0) {
            commit('increment')
        }
    },
    clickAsycn: ({ commit }) => {
        // commit('clickAsycn')
        new Promise((resolve) => {
            setTimeout(() => {
                commit('increment');
                resolve();
            }, 2000)
        })
    }
}

const getters = {
    count(state) {
        return state.count
    }
}

//需要到处去对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});