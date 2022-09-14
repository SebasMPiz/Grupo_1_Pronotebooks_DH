const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const imagesFilePath = path.join(__dirname, '../data/images.json');
const images = JSON.parse(fs.readFileSync(imagesFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    home: (req,res)=>{
        console.log("entrando")

    const inSaleProducts = products.filter ( (product) => {
		return product.oferta === "si";
	});

    const masVendidosProducts = products.sort(function (a, b){
        return (b.cantVendida - a.cantVendida)
    })
    const topCincoVendidos = masVendidosProducts.slice(0,5)
       
    res.render('home',{ products, inSaleProducts, topCincoVendidos, toThousand });
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