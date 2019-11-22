import Vue from 'vue'
import Vuex from 'vuex'
import pageOne from './modules/pageOne'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pageOne,
  }
})
