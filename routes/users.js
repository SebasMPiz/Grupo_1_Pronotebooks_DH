const express = require('express');
const router = express.Router();
const multer = require("multer")
const uploadFile = require('../middlewares/uploadImage');
const usersController = require('../controllers/usersController')


/*** GET ALL USERS ***/ 
router.get("/list", usersController.list)

/*** LOGIN ***/ 
/*router.get("/login", usersController.login)*/

/*** CREATE ONE USER ***/ 
router.get ("/register", usersController.register)
router.post ('/register', uploadFile.single('image'), usersController.store);

/*** DETAIL MY PROFILE ***/ 
/*router.get("/:id", usersController.detail)*/

/*** EDIT MY PROFILE ***/
router.get('/:id/edit', usersController.editUser)
router.patch('/:id', uploadFile.single('image'), usersController.update);

/*** DELETE ACCOUNT***/ 
router.delete('/:id', usersController.destroy)

module.exports = router;