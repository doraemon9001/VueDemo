import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import {mutations, state} from './mutations'
import * as getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({actions, state, mutations, getters})