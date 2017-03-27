import types from './mutationstypes'

export const state = {
    count: 0
}

export const mutations = {
    [types.doAdd](state) {
        return state.count++
    },
    [types.doMinus](state) {
        return state.count--
    }
}