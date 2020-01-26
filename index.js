//importamos express
const express = require("express");
const app = express();


//acrhivos estaticos
app.use(express.static(__dirname + "/public"));
//rutas
app.get("/acerca", (req, res) => {
    res.sendFile(__dirname + "/acerca.html");
});
app.get("/nosotros", (req, res) => {
    res.sendFile(__dirname + "/nosotros.html");
});


app.get("*", (req, res) => {
    res.send("No se encuentra esa pagina")
});

app.listen(process.env.PORT, () => {
    console.log("en puerto 30000");
});