import axios from 'axios'

const url = 'http://localhost:4000/auth/signin'

const state = {
    token: null,
    data: {},
}

const actions = {
    async login({commit},usuario) {
       
        const res = await axios.post(url, usuario);
        console.log(res)
       
        commit('setToken', res.data.token)
        commit('setData', res.data.datos)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('data', res.data.datos)
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
      localStorage.removeItem('data')
      commit('setToken',null)
      commit('setData',{})
    }
};

const mutations = {
    setToken(state,payload){
      state.token=payload
    },
    setData(state,payload){
      state.data=payload
    },
    };
  const getters = {}

export default {state, getters, actions, mutations}
