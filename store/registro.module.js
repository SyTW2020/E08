import _asyncToGenerator from "C:/Users/david/Desktop/Pagina VUE/SyTW/front/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import "regenerator-runtime/runtime.js";
import axios from 'axios';
var url = 'http://localhost:4000/auth/signup';
var state = {
  token: null
};
var actions = {
  signup: function signup(_ref, registro) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var commit, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return axios.post(url, registro);

            case 3:
              res = _context.sent;
              console.log(res);
              commit('setToken', res.data);
              localStorage.setItem('token', res.data);
              localStorage.setItem('usuario', registro.email);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
var mutations = {
  setToken: function setToken(state, payload) {
    state.token = payload;
  }
};
var getters = {};
export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};