import axios from 'axios'

const url = 'http://localhost:4000/auth/signup'

const state = {
    token: null,
    data: {},
}

const actions = {
    async signup({commit},registro) {
       console.log("casita")
        const res = await axios.post(url, registro);
        console.log(res)
       
        commit('setToken', res.data.token)
        commit('setData', res.data.datos)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('data', res.data.datos)
    }, 

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