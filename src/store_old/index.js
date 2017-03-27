import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import { state,mutations } from './mutations'
import * as getters from './getters'


Vue.use(Vuex)


export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})