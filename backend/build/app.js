"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _initialSetup = require("./libs/initialSetup");

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var cors = require('cors');

var corsOptions = {
  origin: '*',
  // Reemplazar con dominio
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

};
app.use(cors(corsOptions));
(0, _initialSetup.createRoles)();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json('OkeeeY');
});
app.use('/products', _products["default"]);
app.use('/auth', _auth["default"]);
var _default = app;
exports["default"] = _default;