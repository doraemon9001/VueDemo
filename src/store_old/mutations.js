import * as types from './mutationTypes'

export const state = {
    count: 10
}

export const mutations = {
    [types.doAdd](state) {
        return state.count++
    },
    [types.doMinus](state) {
        return state.count--
    }
}