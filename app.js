const express = require('express');
const app = express();
const rutasMain = require('./routes/main');

//Creamos la carpeta estática
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', rutasMain);

app.listen(3040, ()=>{
    console.log('Servidor corriendo en puerto 3040');
})

/*app.listen(3040, ()=>{
    console.log('Servidor corriendo en peurto 3040');
});

app.get('/', (req,res)=>{
    res.render(__dirname + '/views/home.ejs');
});

app.post('/', (req,res)=>{
    res.render(__dirname + '/views/home.ejs');
});

app.get('/login', (req,res)=>{
    res.render(__dirname + '/views/users/login.ejs');
});

app.get('/register', (req,res)=>{
    res.render(__dirname + '/views/users/register.ejs');
});

app.get('/detalle', (req,res)=>{
    res.render(__dirname + '/views/products/detalle.ejs');
});
app.get('/carrito', (req,res)=>{
    res.render(__dirname + '/views/products/carrito.ejs');
});*/