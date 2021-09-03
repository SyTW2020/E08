"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isModerador = exports.verifytoken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Usuarios = _interopRequireDefault(require("../models/Usuarios"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifytoken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decode, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers["x-access-token"];

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: "No existe token"
            }));

          case 3:
            _context.prev = 3;
            decode = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            req.userId = decode.id;
            _context.next = 8;
            return _Usuarios["default"].findById(req.userId, {
              password: 0
            });

          case 8:
            user = _context.sent;

            if (user) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Usuario no existe"
            }));

          case 11:
            next();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.status(500).json({
              message: "No autorizado"
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 14]]);
  }));

  return function verifytoken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifytoken = verifytoken;

var isModerador = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Usuarios["default"].findById(req.userId);

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return _Rol["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context2.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context2.next = 14;
              break;
            }

            if (!(roles[i].name === 'moderator')) {
              _context2.next = 11;
              break;
            }

            next();
            return _context2.abrupt("return");

          case 11:
            i++;
            _context2.next = 7;
            break;

          case 14:
            return _context2.abrupt("return", res.status(403).json({
              message: "No eres moderador"
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isModerador(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isModerador = isModerador;