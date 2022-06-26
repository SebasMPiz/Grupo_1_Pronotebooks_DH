const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const rutasMain = require('./routes/main');
const rutasProducts = require('./routes/productos');
const methodOverride =  require('method-override');

//Creamos la carpeta estática
app.use(express.static('public'));

//Template Engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser())
app.use(methodOverride('_method'))

app.use('/', rutasMain);
app.use("/products", rutasProducts);


app.listen(3040, ()=>{
    console.log('Servidor corriendo en puerto 3040');
})
app.get('/', (req,res)=>{
    res.render(__dirname + '/views/home.ejs');
});
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

app.get('/carrito', (req,res)=>{
    res.render(__dirname + '/views/products/carrito.ejs');
});*/