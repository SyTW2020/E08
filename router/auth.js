var _asyncToGenerator = require("C:/Users/david/Desktop/Pagina VUE/SyTW/front/node_modules/@babel/runtime/helpers/asyncToGenerator").default;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.function.name.js");

var router = require('express').Router();

var User = require('../models/User');

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var Joi = require('@hapi/joi');

require('dotenv').config();

var schemaRegister = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().min(6).max(1024).required().email(),
  password: Joi.string().min(8).max(255).required() //    direccion: Joi.string().min(3).max(1024).required()
  //  poblacion: Joi.string().min(3).max(1024).required()
  //fecha_nacimiento
  //codigo_postal

});
var schemaLogin = Joi.object({
  email: Joi.string().min(6).max(1024).required().email(),
  password: Joi.string().min(8).max(255).required()
});
router.post('/login', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _schemaLogin$validate, error, user, pass, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //validaciones
            _schemaLogin$validate = schemaLogin.validate(req.body), error = _schemaLogin$validate.error;

            if (!error) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: error.details[0].message
            }));

          case 3:
            _context.next = 5;
            return User.findOne({
              email: req.body.email
            });

          case 5:
            user = _context.sent;

            if (user) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: true,
              mensaje: 'email no encontrado'
            }));

          case 8:
            _context.next = 10;
            return bcrypt.compare(req.body.password, user.password);

          case 10:
            pass = _context.sent;

            if (pass) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: true,
              mensaje: 'contraseña mal'
            }));

          case 13:
            //var sec  = process.env.TOKEN_SECRET; 
            //crear token
            token = jwt.sign({
              name: user.name,
              id: user._id
            }, process.env.TOKEN_SECRET);
            res.json({
              error: null,
              token: token
            });
            res.header('auth-token', token), json({
              error: null,
              data: {
                token: token
              }
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/register', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _schemaRegister$valid, error, EmailExiste, salt, password, user, userDB;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // validate user
            _schemaRegister$valid = schemaRegister.validate(req.body), error = _schemaRegister$valid.error;

            if (!error) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              error: error.details[0].message
            }));

          case 3:
            _context2.next = 5;
            return User.findOne({
              email: req.body.email
            });

          case 5:
            EmailExiste = _context2.sent;

            if (!EmailExiste) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              error: true,
              mensaje: 'Email ya Registrado. Por favor introduzca otro'
            }));

          case 8:
            _context2.next = 10;
            return bcrypt.genSalt(10);

          case 10:
            salt = _context2.sent;
            _context2.next = 13;
            return bcrypt.hash(req.body.password, salt);

          case 13:
            password = _context2.sent;
            user = new User({
              name: req.body.name,
              email: req.body.email,
              //password: password
              password: password
            });
            _context2.prev = 15;
            _context2.next = 18;
            return user.save();

          case 18:
            userDB = _context2.sent;
            res.json({
              error: null,
              data: userDB
            });
            _context2.next = 25;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](15);
            res.status(400).json(_context2.t0);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[15, 22]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
module.exports = router;