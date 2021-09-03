var jwt = require("jsonwebtoken"); // middleware to validate token (rutas protegidas)


var verifyToken = function verifyToken(req, res, next) {
  var token = req.header("auth-token");
  if (!token) return res.status(401).json({
    error: "Acceso denegado"
  });

  try {
    var verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next(); // continuamos
  } catch (error) {
    res.status(400).json({
      error: "token no es válido"
    });
  }
};

module.exports = verifyToken;