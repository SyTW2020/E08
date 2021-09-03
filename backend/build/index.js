"use strict";

var _app = _interopRequireDefault(require("./app.js"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(4000);

console.log('Serve listen on port ', 3000);