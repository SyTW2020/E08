"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataProfile = exports.signin = exports.signup = void 0;

var _Usuarios = _interopRequireDefault(require("../models/Usuarios"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, email, password, nombre, apellido, numero, poblacion, address, codigo, roles, nuevousuario, foundRoles, role, saveUser, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //obteniendo req body
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, nombre = _req$body.nombre, apellido = _req$body.apellido, numero = _req$body.numero, poblacion = _req$body.poblacion, address = _req$body.address, codigo = _req$body.codigo, roles = _req$body.roles; //Creando nuevo usuario 

            _context.t0 = _Usuarios["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 6;
            return _Usuarios["default"].encryptPassword(password);

          case 6:
            _context.t3 = _context.sent;
            _context.t4 = nombre;
            _context.t5 = apellido;
            _context.t6 = numero;
            _context.t7 = poblacion;
            _context.t8 = address;
            _context.t9 = codigo;
            _context.t10 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3,
              nombre: _context.t4,
              apellido: _context.t5,
              numero: _context.t6,
              poblacion: _context.t7,
              address: _context.t8,
              codigo: _context.t9
            };
            nuevousuario = new _context.t0(_context.t10);

            if (!roles) {
              _context.next = 22;
              break;
            }

            _context.next = 18;
            return _Rol["default"].find({
              name: {
                $in: roles
              }
            });

          case 18:
            foundRoles = _context.sent;
            nuevousuario.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 26;
            break;

          case 22:
            _context.next = 24;
            return _Rol["default"].findOne({
              name: "user"
            });

          case 24:
            role = _context.sent;
            nuevousuario.roles = [role._id];

          case 26:
            _context.next = 28;
            return nuevousuario.save();

          case 28:
            saveUser = _context.sent;
            console.log(saveUser); //Creamos token

            token = _jsonwebtoken["default"].sign({
              id: saveUser._id
            }, _config["default"].SECRET, {
              expiresIn: 1800 // 30 min

            });
            return _context.abrupt("return", res.json(token));

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userFound, matchpass, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Usuarios["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Usuario no encontrado"
            }));

          case 5:
            _context2.next = 7;
            return _Usuarios["default"].compararPassword(req.body.password, userFound.password);

          case 7:
            matchpass = _context2.sent;

            if (matchpass) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "Contraseña fallida "
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 1800
            });
            res.json(token);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;

var dataProfile = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var userFound, datos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Usuarios["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 2:
            userFound = _context3.sent;

            if (userFound) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "Usuario no encontrado"
            }));

          case 5:
            datos = {
              "username": userFound.username,
              "email": userFound.email,
              "nombre": userFound.nombre,
              "apellido": userFound.apellido,
              "numero": userFound.numero,
              "poblacion": userFound.poblacion,
              "address": userFound.address,
              "codigo": userFound.codigo
            };
            res.json(datos);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function dataProfile(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.dataProfile = dataProfile;