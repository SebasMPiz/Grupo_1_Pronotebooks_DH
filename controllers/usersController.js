const fs                  = require('fs');
const path                = require('path');
const bcryptjs            = require("bcryptjs")
const {	validationResult} = require('express-validator');
const { localsName }      = require('ejs');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op }    = require("sequelize");
const moment    = require('moment');

const users       = db.users;
const cart        = db.cart;
const imagesusers = db.imagesusers;
const categories  = db.categories;


const usersController = {

	list: (req, res) => {
        users.findAll({
            include: [{model:categories}, {model:imagesusers}]
        })
            .then(users => {
                res.render('users/list.ejs', {users, session : req.session}) 
				
            })},

	register: (req,res)=>{
				users.findAll({include: [{model:categories}, {model:imagesusers}]
				})
			.then(users => {
				res.render('users/register', {users, session : req.session}); 
				// res.json(brand.length)
				
					// let errores = validationResult (req);
					// if (!errores.isEmpty()) {
				
					// 		return res.render ("users/register", {mensajeDeError: errores.array ()})
				
					// }		
			})
	
		},
	
	login: (req,res)=>{
		users.findAll({include: [{model:categories}, {model:imagesusers}]
		})
			.then(users => {

			if (req.session.userLogged) {
				res.json(req.session.userLogged)
			}
			else {
				res.render('users/login', {users, session : req.session})
			}

			})},
	
	loginProcess: async (req, res) => {
			let userToLogin = await users.findOne({ where: { email: req.body.email } });
			if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
				if (isOkThePassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
			
					if(req.body.remember_user) {
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
						}
			
					return res.redirect('login');
					} 
					return res.render('users/login', {
					errors: {
					email: {
					msg: 'Las credenciales son inválidas'
						}
					},
					session : req.session
					});
					}
					return res.render('users/login', {
					errors: {
					email: {
					msg: 'No se encuentra este email en nuestra base de datos'
							}
						},
					session : req.session
					});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
			req.session.destroy();
			return res.redirect('/users/login');
				},

	store: async (req, res) => {
			let result = validationResult(req);
			
			if (result.errors.length == 0){
				let uploadImage = await imagesusers.create({
					profileImage: req.file ? req.file.filename : 'ppdefecto.png',
				});	
				users.create({ 
					name: req.body.name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: bcryptjs.hashSync(req.body.password, 10),
					phone: req.body.phone, 
					country: req.body.country,
					id_category: req.body.category === "Administrador" ? 2 : 1,
					id_imageUsers: uploadImage.null,
				}),
				res.redirect("/users/login");
			} 
			else{res.render("users/register", {errors: result.errors, session : req.session})}
		},

	profile: (req, res) => {
			return res.render('users/myProfile', {
			users: req.session.userLogged, session : req.session
				});
		},
				
	detail: (req, res) => {
		
		users.findByPk(req.params.id, {include: [{model:categories}, {model:imagesusers}]
			})
			.then(users => {
				return res.render('users/myProfile', {
					users, session : req.session});
			})},

    editUser: (req, res) => {
		users
			.findByPk(req.params.id, {include: [{model:categories}, {model:imagesusers}]})
			.then(users => {
			return res.render('users/editUser', {editUser: users, session : req.session})
		})},

	update: (req,res) => {

		users.findByPk(req.params.id, {include: [{model:categories}, {model:imagesusers}]})
            .then(users => {
				users.update({ 
					name: req.body.name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: req.body.password ? bcryptjs.hashSync(req.body.password, 10) : users.password,
					phone: req.body.phone,
					country: req.body.country,
					id_category: req.body.category === "Administrador" ? 2 : 1,
				},
				{
					where: {id: users.Id}
				});
				imagesusers.update({
					profileImage: req.file ? req.file.filename : imagesusers.profileImage
				},
				{
					where: {id: users.id_imageUsers}
				});
			});
			res.redirect('/users'); 		
		},

	destroy: (req, res) => {
			users
				.findByPk(req.params.id, {include: [{model:categories}, {model:imagesusers}]})
				.then(users => {
					// product.removeCategories(product.imagesproducts);
	
					users.destroy(/* {
						where: {id:req.params.id}
					} */);
					return res.redirect('/users');
				})
				.catch(error => res.send(error));
		},

}
module.exports = usersController