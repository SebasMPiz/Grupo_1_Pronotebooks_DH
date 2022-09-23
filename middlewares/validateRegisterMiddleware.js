const path = require('path');
const { check } = require('express-validator');

module.exports = [
	check('name').notEmpty().withMessage('Tienes que escribir un nombre'),
	check('last_name').notEmpty().withMessage('Tienes que escribir un apellido'),
	check('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	check('phone').notEmpty().withMessage('Tienes que escribir un telefono'),
	check('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	check('password').isLength({min:5, max:20}).withMessage('La contraseña debe tener entre 5 y 20 caracteres'),
	check('country').notEmpty().withMessage('Tienes que elegir un país'),
	check('category').notEmpty().withMessage('Debes definir una categoria de usuario'),

]

