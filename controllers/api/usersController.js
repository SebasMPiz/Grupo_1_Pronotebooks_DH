const { json } = require('body-parser');
const db = require('../../database/models');
const { includes } = require('../../middlewares/validateRegisterMiddleware');
const Op = db.Sequelize.Op


const users       = db.users;
const imagesusers = db.imagesusers;


module.exports={
	list: async(req, res) => {
		await users.findAll()
            .then(users => {
                let listUsers=[];
				users.forEach((user) => {
					let data = {};
					data['id'] = user.Id
					data['name'] = user.name
					data['last_name'] = user.last_name
					data['email'] = user.email
					listUsers.push(data);
				});
				res.status(200).json({
				meta:{
					status:200,
					total: users.length,
					url:"api/users,"
				},
				data: listUsers
			});
	})
	.catch(error => {
		res.status(404).json({
			meta:{
				status:404,
				url: "api/users"
			},
			data: "not found"
		});
	})},

	detail: async(req, res) => {
		 
		await users.findByPk(req.params.id, {
			include:imagesusers,
			attributes: {
			   exclude: ['password','id_category','id_imageUsers']
			}})
            .then(users => {
				let urlimagen = users.imagesuser.profileImage
                return res.status(200).json({
					data: users,
					URLimagen: 'http://localhost:3040/img/users/'+urlimagen,
					status: 200
				}) 
            }
	)}
    }
