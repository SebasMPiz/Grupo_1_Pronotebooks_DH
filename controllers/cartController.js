const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const products       = db.products;
const cart          = db.cart;
const users          = db.users;
const imagesproducts = db.imagesproducts

const cartController = {
    list: async (req,res)=>{
        cart.findAll({include: [{model:users, where: {Id: req.params.id}}, {model:products, include: [{model: imagesproducts}] }]},)
        .then(cart =>{

            let listaCarrito = cart

            res.json(listaCarrito)
        })}
    }

            
            // res.render("cart/carrito")
        

        
module.exports = cartController;