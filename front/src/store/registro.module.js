import axios from "axios";

const url = "https://elective-backend.herokuapp.com/auth/signup";

const state = {
  token: null,
};

const actions = {
  async signup({ commit }, registro) {
    const res = await axios.post(url, registro);
    console.log(res);

    commit("setToken", res.data);
    localStorage.setItem("token", res.data);
    localStorage.setItem("usuario", registro.email);
  },
};

const mutations = {
  setToken(state, payload) {
    state.token = payload;
  },
};
const getters = {};

export default { state, getters, actions, mutations };
