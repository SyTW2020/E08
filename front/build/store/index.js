"use strict";

var _interopRequireDefault = require("C:/Users/Usuario/Documents/SErgio Espabila/E08/front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

_vue.default.use(_vuex.default);

var _default = new _vuex.default.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

exports.default = _default;