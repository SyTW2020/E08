"use strict";

var _interopRequireDefault = require("C:/Users/Usuario/Documents/SErgio Espabila/E08/front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

var _interopRequireWildcard2 = _interopRequireDefault(require("C:/Users/Usuario/Documents/SErgio Espabila/E08/front/node_modules/@babel/runtime/helpers/esm/interopRequireWildcard"));

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Registro = _interopRequireDefault(require("../views/Registro.vue"));

var _Login = _interopRequireDefault(require("../views/Login.vue"));

_vue.default.use(_vueRouter.default);

var routes = [{
  path: "/",
  name: "Home",
  component: _Home.default
}, {
  path: "/about",
  name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("../views/About.vue"));
    });
  }
}, {
  path: "/registro",
  name: "Registro",
  component: _Registro.default
}, {
  path: "/login",
  name: "Login",
  component: _Login.default
}];
var router = new _vueRouter.default({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports.default = _default;