const express = require("express");
const app = express();
const path = require('path');

app.listen(3030, () => console.log("El servidor esta corriendo en puerto 3030"))

app.use(express.static(path.join(__dirname, "./public")))

app.get ("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))})
    
