const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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