const mainController = {
    home: (req,res)=>{
        res.render('home');
    },

    carrito: (req,res)=>{
        res.render('products/carrito');
        // renderizar vista de carrito
 
    },

    login: (req,res)=>{
        res.render('users/login');
    },

    register: (req,res)=>{
        res.render('users/register'); 
        // vincular con json de clientes
    },
}

module.exports = mainController;