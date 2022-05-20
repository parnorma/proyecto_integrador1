const path = require("path");
const express = require("express");
const app = express();

//const PORT = 3005;
/* para heroku */
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log("Servidor activo " + PORT);
});

// esto es un mildware para permitir que se puedan ver las imagenes
// esto nos permite que podamos cargar las imagenes partiendo desde /
// ejemplo /images/logo-mercado-liebre.svg  la barra representa localhost:3050
// recomendable que siempre comience con barra siempre
app.use(express.static(path.join(__dirname, "public")));

//camino | path | ruta
app.get("/", (req, res) => {
  //funcion controladora
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  //funcion controladora
  res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login", (req, res) => {
  //funcion controladora
  res.sendFile(path.join(__dirname, "views/login.html"));
});
