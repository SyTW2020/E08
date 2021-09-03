import Vue from "vue";
import Vuex from "vuex";
import log from './login.module';
import productos from './productos.module';
import registro from './registro.module';
import profile from './perfil.module';
import store from './store';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    log: log,
    productos: productos,
    registro: registro,
    profile: profile,
    store: store
  }
});