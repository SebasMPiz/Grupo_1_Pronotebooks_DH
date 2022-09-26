const path = require('path');
const { check } = require('express-validator');

module.exports = [
	check('marca').notEmpty().withMessage('Selecciona una marca'),
	check('serie').notEmpty().withMessage('Indicar la serie de la marca'),
	check('modelo').notEmpty().withMessage('indicar el modelo'),
	check('procesador').notEmpty().withMessage('indicar el procesador'),
	check('graficos').notEmpty().withMessage('indicar placa de video'),
	check('memoria').notEmpty().withMessage('indicar memoria RAM'),
	check('almacenamiento').notEmpty().withMessage('indicar el modelo'),
	check('sistemaOperativo').notEmpty().withMessage('indicar el sistema operativo'),
	check('pantalla').notEmpty().withMessage('indicar el tamaño de pantalla'),
	check('color').notEmpty().withMessage('indicar el color'),
	check('precio').notEmpty().withMessage('ingrese un precio'),
	check('precio').isNumeric().withMessage('ingrese un numero'),
	check('slotExpansion').notEmpty().withMessage('indique si está en oferta'),
	check('category').notEmpty().withMessage('indicar categoria de laptop'),
]

