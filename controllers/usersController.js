const fs                  = require('fs');
const path                = require('path');
const bcryptjs            = require("bcryptjs")
const {	validationResult} = require('express-validator');
// const user                = require('../models/user');
const { localsName }      = require('ejs');


// const usersFilePath = path.join(__dirname, '../data/Users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
				//console.log(users)
                res.render('users/list.ejs', {users}) 
				//res.json(users)
				
            })},

	register: (req,res)=>{
				users.findAll({include: [{model:categories}, {model:imagesusers}]
				})
			.then(users => {
				res.render('users/register', {users}) 
				// res.json(brand.length)
						
			})},
	
	login: (req,res)=>{
		users.findAll({include: [{model:categories}, {model:imagesusers}]
		})
			.then(users => {
				res.render('users/login', {users})
				
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
			
					return res.redirect('profile');
					} 
					return res.render('users/login', {
					errors: {
					email: {
					msg: 'Las credenciales son inválidas'
						}
					}
					});
					}
					return res.render('users/login', {
					errors: {
					email: {
					msg: 'No se encuentra este email en nuestra base de datos'
							}
						}
					});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
			req.session.destroy();
			return res.redirect('/');
				},

	store: async (req, res) => {
		
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
			res.redirect("/users")	
		},

		profile: (req, res) => {
			return res.render('users/myProfile', {
			users: req.session.userLogged
				});
				},
				


	// detail: (req, res) => {
	// 	let idUser = req.params.id;
	// 	let user = users.find(product => product.id == idUser)
	// 	res.render("users/myProfile", { users:user })
	// },

    // editUser: (req, res) => {
	// 	let id = req.params.id
	// 	let editUser = users.find(user => user.id == id)
	// 	res.render("users/editUser", { editUser })
    // },

    // update: (req, res) => {
	// 	let id = req.params.id 
	// 	let editUser = users.find(user => user.id == id) 
	// 	editUser = {
	// 		id: editUser.id,
	// 		...req.body,
	// 		password: bcrypt.hashSync(req.body.password, 10),
	// 		image: req.file ? req.file.filename : 'defaultuser.jfif'
	// 	}; 
	// 	let newUsers = users.map(user => {
													 
	// 		if (user.id === editUser.id) {
	// 			return user = { ...editUser };  
	// 		}
	// 		    return user;
	// 	})
	// 	fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, ' '));
	// 	res.redirect("/users/list");
	// },

	// destroy: (req, res) => {
	// 	let id = req.params.id  
	// 	let finalUsers = users.filter(user => user.id != id) 

  	// 	fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
	// 	res.redirect("/users/list")
	// },

}
module.exports = usersController