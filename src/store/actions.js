import types from './mutationstypes'

export default {
    [types.doAdd]: ({ commit, getters }) => { 
        if (getters.count <= 0) {
            alert('count must greater than zero')
            return
        }
        commit(types.doAdd)
    },
    [types.doMinus]: ({ commit }) => commit(types.doMinus)
}