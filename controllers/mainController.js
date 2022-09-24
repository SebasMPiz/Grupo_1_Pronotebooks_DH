const fs = require('fs');
const path = require('path');
const db = require('../database/models');


const products       = db.products;
const brand          = db.brand;
const imagesproducts = db.imagesproducts
const cart          = db.cart;
const users          = db.users;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    home: async (req,res)=>{

    products.findAll({
        include: [{model:brand}, {model:imagesproducts}],
        })
        .then(products => {

        const inSaleProducts = products.filter ( (product) => {
            return product.expansionSlot == 1;
        });
        const masVendidosProducts = products.sort(function (a, b){
            return (b.soldQuantity - a.soldQuantity)
        })
        const topCincoVendidos = masVendidosProducts.slice(0,5)

       

        res.render('home',{ products, inSaleProducts, topCincoVendidos, toThousand, session : req.session })

        })        
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