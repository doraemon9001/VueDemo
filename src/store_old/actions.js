import {doAdd, doMinus} from './mutationTypes'

export default {
  [doAdd] : ({commit}) => {
    commit(doAdd)
  },
  [doMinus] : ({commit}) => commit(doMinus)
}
