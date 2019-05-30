import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import loading from './modules/loading'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    loading
  },
  getters
})

export default store
