import axios from "axios";

const url = "https://elective-backend.herokuapp.com/auth/profile";

const state = {
  datos: {},
};

const actions = {
  async datosUser({ commit }) {
    const correo = await localStorage.getItem("usuario");

    const user = {
      email: correo,
    };
    const prueba2 = "email : " + correo;
    const prueba3 = JSON.stringify(prueba2);
    console.log(prueba3);

    const res = await axios.post(url, user);
    console.log(res);
    commit("setData", res.data);
  },
};

const mutations = {
  setData(state, payload) {
    state.datos = payload;
  },
};
const getters = {
  allData: (state) => state.datos,
};

export default { state, getters, actions, mutations };
