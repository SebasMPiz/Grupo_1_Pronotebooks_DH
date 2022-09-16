const express            = require('express');
const router             = express.Router();
const multer             = require("multer")
const uploadFile         = require('../middlewares/uploadImage');
const productsController = require('../controllers/productController')
const validationsProduct     = require('../middlewares/validateProductRegisterMiddleware');


/*** GET ALL PRODUCTS ***/ 
router.get("/", productsController.list)

// ** CREATE ONE PRODUCT ***/ 
router.get ("/create", productsController.create)
router.post ('/', uploadFile.single('image'), validationsProduct, productsController.store);

// /*** DETAIL ONE PRODUCT ***/ 
router.get("/:id", productsController.detail)

// /*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productsController.editProd)
router.patch('/:id', productsController.update);

// /*** EDIT IMAGES ***/
// router.get('/:id/editImage', productsController.editImage)
// router.patch('/:id/editImage/', uploadFile.single('image'), productsController.updateImage);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy)

module.exports = router;