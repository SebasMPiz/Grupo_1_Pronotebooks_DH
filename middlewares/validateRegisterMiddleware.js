const path = require('path');
const { check } = require('express-validator');

module.exports = [
	check('name').notEmpty().withMessage('Tienes que escribir un nombre'),
	check('last_name').notEmpty().withMessage('Tienes que escribir un apellido'),
	check('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	check('phone').notEmpty().withMessage('Tienes que escribir un telefono'),
	check('password').notEmpty().isLength({min:5, max:8}).withMessage('Tienes que escribir una contraseña'),
	check('country').notEmpty().withMessage('Tienes que elegir un país'),
	check('category').notEmpty().withMessage('Debes definir una categoria de usuario'),
	// check('imageInput').notEmpty().withMessage('Debes cargar una foto de usuario')	
	// // custom((value, { req }) => {
	// 	let file = req.file;
	// 	let acceptedExtensions = ['.jpg', '.png', '.gif'];

	// 	if (!file) {
	// 		throw new Error('Tienes que subir una imagen');
	// 	} else {
	// 		let fileExtension = path.extname(file.originalname);
	// 		if (!acceptedExtensions.includes(fileExtension)) {
	// 			throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
	// 		}
	// 	}
	// 	checkRules = (req, res, next) => {
	// 		const errors = validationResult(req);
	// 		if (!errors.isEmpty()) {
	// 			return res.status(400).json({ errors: errors.array() });
	// 		}
	// 		next();
	// 	};
	// 	return true;
	// })
]

