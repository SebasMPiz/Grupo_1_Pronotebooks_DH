const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', mainController.home)

router.get('/carrito', authMiddleware, mainController.carrito)

// router.get('/detalle', mainController.detalle)

// router.get('/login', mainController.login)

// router.get('/register', mainController.register)




module.exports = router;