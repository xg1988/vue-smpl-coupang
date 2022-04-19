import { createStore } from 'vuex'
import heropy from './heropy'
import coupang from './coupang'

export default createStore({
  modules: {
    heropy
    ,coupang
  }
})
