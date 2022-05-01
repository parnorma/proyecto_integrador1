const path = require("path");
const express = require("express");
const app = express();

const PORT = 3005;

app.listen(PORT, () => {
    console.log("Servidor activo "+PORT);
});
// esto es un mildware para permitir que se puedan ver las imagenes
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    //funcion controladora
    res.sendFile(path.join(__dirname,"views/home.html"));
});