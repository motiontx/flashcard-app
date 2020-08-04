import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    training: false,
  },
  mutations: {
    joinTraining: (state) => state.training = true,
    exitTraining: (state) => state.training = false,
  },
  actions: {},
  modules: {}
})
