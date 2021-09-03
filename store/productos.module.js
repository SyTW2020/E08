import _asyncToGenerator from "C:/Users/david/Desktop/Pagina VUE/SyTW/front/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import "regenerator-runtime/runtime.js";
import axios from "axios";
var url = 'http://localhost:4000/products';
var state = {
  products: [],
  detalles: {}
};
var getters = {
  allProducts: function allProducts(state) {
    return state.products;
  },
  detallesProductos: function detallesProductos(state) {
    return state.detalles;
  }
};
var actions = {
  obtenerProductos: function obtenerProductos(_ref) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var commit, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return axios.get(url);

            case 3:
              res = _context.sent;
              commit('setProducts', res.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  obtenerDataProducto: function obtenerDataProducto(_ref2, producto) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var commit, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              console.log(producto);
              _context2.next = 4;
              return axios.get("".concat(url, "/").concat(producto));

            case 4:
              res = _context2.sent;
              console.log(res);
              commit('getProduct', res.data);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
var mutations = {
  setProducts: function setProducts(state, products) {
    return state.products = products;
  },
  getProduct: function getProduct(state, producto) {
    return state.detalles = producto;
  }
};
export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};