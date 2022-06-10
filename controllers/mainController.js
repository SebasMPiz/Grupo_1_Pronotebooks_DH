const mainController = {
    home: (req,res)=>{
        res.render('home');
    },

    carrito: (req,res)=>{
        res.render('products/carrito');
    },

    detalle: (req,res)=>{
        res.render('products/detalle');
    },

    login: (req,res)=>{
        res.render('users/login');
    },

    register: (req,res)=>{
        res.render('users/register');
    },

    creacionProd: (req,res)=>{
        res.render('products/creacionProd');
    },

    edicionProd: (req,res)=>{
        res.render('products/edicionProd');
    },
}

module.exports = mainController;