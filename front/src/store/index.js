import Vue from "vue";
import Vuex from "vuex";
import log from './login.module'


Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    log
  }
})


