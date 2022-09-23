const { json } = require('body-parser');
const db = require('../../database/models');
const { includes } = require('../../middlewares/validateRegisterMiddleware');
const Op = db.Sequelize.Op
const sequelize = require('sequelize')

const products       = db.products;
const brand          = db.brand;
const imagesproducts = db.imagesproducts

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

list: async(req, res) => {
		await products.findAll({include: brand,
		})
        .then(async products => {
            let listProducts=[];
			products.forEach((product) => {
				let data = {};
				data['id'] = product.Id
				data['brand'] = product.brand.brand
				data['serie'] = product.brand.serie
				data['model'] = product.brand.model
				listProducts.push(data);
			});
			res.status(200).json({
			meta:{
				status:200,
				total: products.length,
				url:"api/products"
			},
			products: listProducts});
			})
		.catch(error => {
			res.status(404).json({
				meta:{
					status:404,
					url: "api/products"
				},
				products: "not found"
			});
	})}, 
	  
	detail: async (req, res) => {
		await products
			.findByPk(req.params.id, {
				include: [{model:brand}, {model:imagesproducts}]
			})
			.then(product => {
				return res.render('products/detail', {
					product, toThousand
				});
			})
    },

	detail: async(req, res) => {
		 
		await products.findByPk(req.params.id, {
			include: [{model:brand}, {model:imagesproducts}],
			})
            .then( products => {
				
				let urlimagen = products.imagesproduct.mainImage
                return res.status(200).json({
					data: products,
					URLimagen: 'http://localhost:3040/img/products/'+urlimagen,
					status: 200
				}) 
            }
	)}
}
module.exports = productsController