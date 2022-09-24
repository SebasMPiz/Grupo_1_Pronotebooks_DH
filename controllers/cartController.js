const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const products       = db.products;
const cart          = db.cart;
const users          = db.users;

const cartController = {
    list: async (req,res)=>{
        cart.findAll({include: [{model:users}, {model:products}]})
        .then(cart =>{
            res.json(cart)

        })},            
}
        
module.exports = cartController;