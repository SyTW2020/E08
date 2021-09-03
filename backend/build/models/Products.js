"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ProducSchema = new _mongoose.Schema({
  name: String,
  categoria: String,
  precio: Number,
  stock: Number,
  descripcion: String,
  imgUrl: String
}, {
  timestamps: true,
  versionKwy: false
});

var _default = (0, _mongoose.model)('Procust', ProducSchema);

exports["default"] = _default;