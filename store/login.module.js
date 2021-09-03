import _asyncToGenerator from "C:/Users/david/Desktop/Pagina VUE/SyTW/front/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import "regenerator-runtime/runtime.js";
import axios from 'axios';
var url = 'http://localhost:4000/auth/signin';
var state = {
  token: null
};
var actions = {
  login: function login(_ref, usuario) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var commit, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return axios.post(url, usuario);

            case 3:
              res = _context.sent;
              console.log(res);
              commit('setToken', res.token);
              localStorage.setItem('token', res.data);
              localStorage.setItem('usuario', usuario.email);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  readToken: function readToken(_ref2) {
    var commit = _ref2.commit;

    if (localStorage.getItem('token')) {
      commit('setToken', localStorage.getItem('token'));
    } else {
      commit('setToken', null);
    }
  },
  cerrarSesion: function cerrarSesion(_ref3) {
    var commit = _ref3.commit;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    commit('setToken', null);
  }
};
var mutations = {
  setToken: function setToken(state, payload) {
    state.token = payload;
  }
};
var getters = {
  comprobarLog: function comprobarLog() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
};
export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};