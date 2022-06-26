const express = require('express');
const router = express.Router();
const multer = require("multer")
const uploadFile = require('../middlewares/uploadImage');
const productsController = require('../controllers/productController')


/*** GET ALL PRODUCTS ***/ 
router.get("/", productsController.list)

/*** CREATE ONE PRODUCT ***/ 
router.get ("/create", productsController.create)
router.post ('/', uploadFile.single('image'), productsController.store);

/*** DETAIL ONE PRODUCT ***/ 
router.get("/:id", productsController.detail)

/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productsController.editProd)
router.patch('/:id', uploadFile.single('image'), productsController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy)

module.exports = router;