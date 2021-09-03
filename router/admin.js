var router = require("express").Router();

router.get("/", function (req, res) {
  res.json({
    error: null,
    data: {
      title: "mi ruta protegida",
      user: req.user
    }
  });
});
module.exports = router;