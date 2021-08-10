import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,

  },
  mutations: {
    setToken(state,payload){
      state.token=payload
    },
    setProducts(state,payload){
      state.products=payload

    }
  },
  actions: {
    async login({commit}, usuario){
      
      console.log(commit)
      console.log(usuario)
      try {                    //url de postman
        const res = await fetch('https://prueba-tienda-calor.herokuapp.com/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        })
        const resDB = await res.json()
        console.log(resDB.token)

        commit('setToken', resDB.token)

        localStorage.setItem('token', resDB.token)

      } catch (error) {
        console.log(error)
      }

    },
    readToken({ commit }) {
      if(localStorage.getItem('token')){
        commit('setToken', localStorage.getItem('token'))
      }else{
        commit('setToken', null)
      }
    }
  },
  modules: {},
});
