import axios from 'axios'

const url = 'http://localhost:4000/auth/signin'

const state = {
    token: null,
    datos: {},
}

const actions = {
    async login({commit},usuario) {
       
        const res = await axios.post(url, usuario);
        console.log(res)
       
        commit('setData', res.data.datos)
        commit('setToken', res.data.token)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('datos', res.data.datos)
    }, 
    readToken({ commit }) {
      if(localStorage.getItem('token')){
        commit('setToken', localStorage.getItem('token'))
      }else{
        commit('setToken', null)
      }
    },
    cerrarSesion({ commit }) {
      localStorage.removeItem('token')
      localStorage.removeItem('datos')
      commit('setToken',null)
      commit('setData',{})
    }
};

const mutations = {
    setToken(state,payload){
      state.token=payload
    },
    setData(state,payload){
      state.datos=payload
    },
    };
  const getters = { 
    allData : state => state.datos
  }

export default {state, getters, actions, mutations}
