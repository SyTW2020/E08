const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();

// cors
const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
//const uri = `mongodb+srv://API-PRUEBA:TldragRrKmWY5PW2@cluster0.ybpqe.mongodb.net/nombre-db?retryWrites=true&w=majority`;


const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.ybpqe.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
//const uri = `mongodb+srv://API-PRUEBA:<password>@cluster0.ybpqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, option)
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log("error db:", e));

// import routes
const authRoutes = require("./src/router/auth");
const validaToken = require("./src/router/validate-tokens");
const admin = require("./src/router/admin");

// route middlewares
app.use("/api/user", authRoutes);
app.use("/admin", validaToken, admin);
app.get("/", (req, res) => {
  res.json({
    estado: true,
    mensaje: "funciona!",
  });
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`servidor andando en: ${PORT}`);
});
