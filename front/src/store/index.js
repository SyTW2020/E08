import Vue from "vue";
import Vuex from "vuex";
import log from './login.module'
import productos from './productos.module'
import registro from './registro.module'
import profile from './perfil.module'


Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    log,
    productos,
    registro,
    profile
  }
})


