const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")

const usersFilePath = path.join(__dirname, '../data/Users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {

    list: (req,res)=>{
        res.render('users/list', { users });
    },
    register: (req,res)=>{
        res.render('users/register');
    },
	store: (req, res) => {
		console.log(req.file)
		let newUser = {
		id: users[users.length - 1].id + 1,
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			image: req.file ? req.file.filename : 'defaultuser.jfif' }
		
			users.push(newUser)
			fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "))
			res.redirect("/users/list")	
	},
	detail: (req, res) => {
		let idUser = req.params.id;
		let user = users.find(product => product.id == idUser)
		
		res.render("users/myProfile", { users:user })
	},
    editUser: (req, res) => {
		let id = req.params.id
		let editUser = users.find(user => user.id == id)
		res.render("users/editUser", { editUser })
    },
    update: (req, res) => {
		let id = req.params.id 
		let editUser = users.find(user => user.id == id) 
		editUser = {
			id: editUser.id,
			...req.body,
			image: req.file ? req.file.filename : 'defaultuser.jfif'
		}; 

		let newUsers = users.map(user => {
													 
			if (user.id === editUser.id) {
				return user = { ...editUser };  
			}
			    return user;
		})
		fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, ' '));
		res.redirect("/users/list");
	},

	destroy: (req, res) => {
		let id = req.params.id  
		let finalUsers = users.filter(user => user.id != id) 

  		fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
		res.redirect("/users/list")
	}
}
module.exports = usersController