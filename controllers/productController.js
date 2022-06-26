const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const imagesFilePath = path.join(__dirname, '../data/images.json');
const images = JSON.parse(fs.readFileSync(imagesFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    list: (req,res)=>{
        res.render('products/list', { products, toThousand });
    },
    create: (req,res)=>{
        res.render('products/creacionProd');
    },
	store: (req, res) => {
		console.log(req.file)
		let nuevoProducto = {
		id: products[products.length - 1].id + 1, //Para no soreescribir productos
			...req.body,
			cantVendida: 0,
			stock: 0,
			imagenBanner: " ",		
			image: req.file ? req.file.filename : 'defaultproduct.jfif' }

		let nuevoImagenes = {
			id: products[products.length - 1].id + 1,
			bannerImage: " ",
			mainImage: req.file ? req.file.filename : 'defaultproduct.jfif',
			image2: req.file ? req.file.filename : 'defaultproduct.jfif', 
			image3: req.file ? req.file.filename : 'defaultproduct.jfif',
			image4: req.file ? req.file.filename : 'defaultproduct.jfif'
		}
			images.push(nuevoImagenes)
			fs.writeFileSync(imagesFilePath, JSON.stringify(images, null, " "))
			products.push(nuevoProducto)
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
			res.redirect("/products/")	
	},
    detail: (req, res) => {
		let idProduct = req.params.id;
		let product = products.find(product => product.id == idProduct)
		let image = images.find(image => image.id == idProduct)
		let hayStock = 0
		let cssStock = 0
		if (product.stock == 0) {
			hayStock = "No hay stock"
			cssStock = "status_stock_no"
		} 
		else {
			hayStock = "Hay " + product.stock + " en stock"
			cssStock = "status_stock_si"
		}
		console.log(product)
		res.render("products/detail", { title: product.marca, hayStock, cssStock, product ,image, toThousand })
    },
    editProd: (req, res) => {
		let id = req.params.id
		let editProduct = products.find(producto => producto.id == id)
		res.render("products/edicionProd", { editProduct })
    },
    update: (req, res) => {
		let id = req.params.id //El id que nos requiere por la url el usuario
		let editProduct = products.find(producto => producto.id == id) //El producto que se va a editar
		editProduct = {
			id: editProduct.id,
			...req.body,
			cantVendida: editProduct.cantVendida,
			stock: editProduct.stock,
			imagenBanner: editProduct.imagenBanner,		
			image: editProduct.image
		}; //El producto que se va a editar

		let newProducts = products.map(producto => {   // El metodo map nos devuelve un array modificado, lo que quiere decir esto es que 
													  //Nuestro array de productos se modifica completo con el nuevo producto editado
			if (producto.id === editProduct.id) {
				return product = { ...editProduct };  // Metodo spread operator nos devuelve todo el objeto
			}
			    return producto;
		})
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect("/products");
	},
    // Delete - Delete one product from DB
	destroy: (req, res) => {
		let id = req.params.id  // Lo mismo que en todas los otros metodos lo primero que capturamos aca es el id
		let finalProducts = products.filter(producto => producto.id != id) // Aqui lo que hacemos es filtrar los productos que no sean el id que nosotros queremos eliminar

  		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' ')); // Aqui lo que hacemos es escribir el archivo de nuevo con los productos que no sean el id que nosotros queremos eliminar
		res.redirect('/products'); 
	}

}
module.exports = productsController