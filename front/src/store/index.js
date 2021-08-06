import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state,payload){
      state.token=payload
    }
  },
  actions: {
    async login({commit}, usuario){
      
      console.log(commit)
      console.log(usuario)
      try {                    //url de postman
        const res = await fetch('http://localhost:3001/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        })
        const resDB = await res.json()
        console.log(resDB.data.token)

        commit('setToken', resDB.data.token)

        localStorage.setItem('token', resDB.data.token)

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
