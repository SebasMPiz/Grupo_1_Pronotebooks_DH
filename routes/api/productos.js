const express            = require('express');
const router             = express.Router();
const productsController = require('../../controllers/api/productController')

router.get("/", productsController.list)
router.get("/:id", productsController.detail)

module.exports = router;