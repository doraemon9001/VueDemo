import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import  state from './state'
import {getters} from './getters'
Vue.use(Vuex)
console.log(actions);
export default new Vuex.Store({actions, state, mutations, getters})