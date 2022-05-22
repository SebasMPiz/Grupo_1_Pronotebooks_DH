const express = require('express');
const app = express();

//Creamos la carpeta estática
app.use(express.static('public'));


app.listen(3040, ()=>{
    console.log('Servidor corriendo en peurto 3040');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});