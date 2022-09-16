const fs   = require('fs');
const path = require('path');
const {	validationResult} = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op }    = require("sequelize");
const moment    = require('moment');

const products       = db.products;
const brand          = db.brand;
const imagesproducts = db.imagesproducts;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

	list: (req, res) => {
        products.findAll({
            include: [{model:brand}, {model:imagesproducts}]
        })
            .then(products => {
                res.render('products/list.ejs',{products, toThousand
				})
				// res.json(products)
				
            })},
	
    create: (req,res)=>{
		brand.findAll({
            
        })
            .then(brand => {
            	res.render('products/creacionProd', {brand, toThousand}) 
				
            })},

	store: async (req, res) => {

		let result = validationResult(req);
			
			if (result.errors.length == 0){
	
				let uploadImage = await imagesproducts.create({
					mainImage: req.file ? req.file.filename : 'defaultproduct.jfif', 
					bannerImage: "defaultproduct.jfif",
					image2: "defaultproduct.jfif",
					image3: "defaultproduct.jfif",
					image4: "defaultproduct.jfif",
				});
				let brandCreate = await brand.create({ 
					brand: req.body.marca,
					serie: req.body.serie,
					model: req.body.modelo,
				});
				products.create({ 
					description: req.body.description,
					processor: req.body.procesador,
					graphics: req.body.graficos,
					memory: req.body.memoria,
					soldQuantity: 0,
					discount: 0,
					operativeSystem: req.body.sistemaOperativo,
					screenSize: req.body.pantalla,
					computerCategory: req.body.category,
					color: req.body.color,
					price: req.body.precio,
					id_imageProducts: uploadImage.null,
					id_brand: brandCreate.null,
				}),
			res.redirect("/products/")
		} 
		else{res.render("products/creacionProd", {brand, toThousand, errors: result.errors})}
	},
	
	detail: (req, res) => {
		products
			.findByPk(req.params.id, {
				include: [{model:brand}, {model:imagesproducts}]
			})
			.then(product => {
				return res.render('products/detail', {
					product, toThousand
				});
			})
    },

    editProd: (req, res) => {
		products.findByPk(req.params.id, {
				include: [{model:brand}, {model:imagesproducts}]
			})
			.then(product => {
				return res.render('products/edicionProd', {
					product
				});
			})
	},
	
    update: (req, res) => {

		products.findByPk(req.params.id, {
            include: [{model:brand}, {model:imagesproducts}]
			})
            .then(product => {
				products.update({ 
					processor: req.body.procesador,
					description: req.body.descripcion,
					graphics: req.body.graficos,
					memory: req.body.memoria,
					operativeSystem: req.body.sistemaOperativo,
					screenSize: req.body.pantalla,
					computerCategory: req.body.category,
					color: req.body.color,
					price: req.body.precio,
				},
				{
					where: {id: product.Id}
				})
			});
			res.redirect('/products'); 		
		},

		
		// let uploadImage = await imagesproducts.update({
		// 	mainImage: req.file , 
		// });

		// // brand.update({ 
		// // 	brand: req.body.marca,
		// // 	serie: req.body.serie,
		// // 	model: req.body.modelo,
		// // },
		// // {
		// // 	where: {Id: id_brand}
		// // }
		// );

			// res.redirect("/products/")
	// editImage: (req,res) => {
	// 	let id = req.params.id
	// 	let editImage = images.find(producto => producto.id == id)
	// 	res.render("products/editImageProd", {editImage})
	// },
	// updateImage: (req,res) => {
	// 			let id = req.params.id 
	// 	let editImage = images.find(image => image.id == id) 	
	// 	editImage = {
	// 		id: editImage.id,
	// 		bannerImage: bannerImage,
	// 		mainImage: req.file,
	// 		image2: editImage.image2,
	// 		image3: editImage.image3,
	// 		image4: editImage.image4,
	// 	}; 
		
	// 	let newImages = images.map(image => {   
												
	// 		if (image.id === editImage.id) {
	// 			return image = { ...editImage };  // Metodo spread operator nos devuelve todo el objeto
	// 		}
	// 		    return image;
	// 	})
	// 	fs.writeFileSync(imagesFilePath, JSON.stringify(newImages, null, ' '));
	// 	res.redirect("/products/");
	// },


	destroy: (req, res) => {
		products
			.findByPk(req.params.id, {
				include: [{model:brand}, {model:imagesproducts}]
			})
			.then(product => {
				// product.removeCategories(product.imagesproducts);

				product.destroy(/* {
					where: {id:req.params.id}
				} */);
				return res.redirect('/products');
			})
			.catch(error => res.send(error));
	},

}
module.exports = productsController