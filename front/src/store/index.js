import Vue from "vue";
import Vuex from "vuex";

//import axios from 'axios' ;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    data: {},

  },
  mutations: {
    setToken(state,payload){
      state.token=payload
    },
    setData(state,payload){
      state.data=payload
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
        /*
       const json = JSON.stringify ({usuario})
        console.log(json)
        const res = await axios.post('http://localhost:4000/auth/signin',json)
        const resDB = await res.json()
        console.log(resDB.token)
        
        
        commit('setToken', resDB.token)
        commit('setData', resDB.data)
        localStorage.setItem('token', resDB.token)
        localStorage.setItem('data', resDB.data)
        
        */
       const json = JSON.stringify ({usuario})
       console.log(json)
       const res = await fetch('http://localhost:4000/auth/signin', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        })
        let resDB = await res.json()
        //console.log(resDB.token)
        console.log(resDB)
        
        
        commit('setToken', resDB.token)

        localStorage.setItem('token', resDB.token)
        localStorage.setItem('data', resDB.data)
        

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
