import types from './mutationstypes'

export default {
  [types.doAdd](state) {
    return state.count++
  },
  [types.doMinus](state) {
    return state.count--
  }
}
