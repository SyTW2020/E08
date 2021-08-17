"use strict";

var _interopRequireDefault = require("C:/Users/Usuario/Documents/SErgio Espabila/E08/front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

_vue.default.use(_bootstrapVue.BootstrapVue);

_vue.default.use(_bootstrapVue.IconsPlugin);

_vue.default.config.productionTip = false;
new _vue.default({
  router: _router.default,
  store: _store.default,
  render: function render(h) {
    return h(_App.default);
  }
}).$mount("#app");