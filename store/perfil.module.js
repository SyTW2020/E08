import _asyncToGenerator from "C:/Users/david/Desktop/Pagina VUE/SyTW/front/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import "regenerator-runtime/runtime.js";
import axios from 'axios';
var url = 'http://localhost:4000/auth/profile';
var state = {
  datos: {}
};
var actions = {
  datosUser: function datosUser(_ref) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var commit, correo, user, prueba2, prueba3, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return localStorage.getItem('usuario');

            case 3:
              correo = _context.sent;
              user = {
                "email": correo
              };
              prueba2 = 'email : ' + correo;
              prueba3 = JSON.stringify(prueba2);
              console.log(prueba3);
              _context.next = 10;
              return axios.post(url, user);

            case 10:
              res = _context.sent;
              console.log(res);
              commit('setData', res.data);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
var mutations = {
  setData: function setData(state, payload) {
    state.datos = payload;
  }
};
var getters = {
  allData: function allData(state) {
    return state.datos;
  }
};
export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};