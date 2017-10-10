import { INCREMENT, REDUCE, CLICKODD } from './types.js';
import getters from './getters.js'

const state = {
    count: 20
}

const mutations = {
    [INCREMENT](state) {
        state.count++
    },
    [REDUCE](state) {
        state.count--
    },
    [CLICKODD](state) {
      
    }
}

export default ({
    state,
    mutations,
    getters
})