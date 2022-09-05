const db = require('../database/models');
const users       = db.users;
const imagesusers = db.imagesusers;
const categories  = db.categories;

async function guestMiddleware (req, res, next) {
	if (req.session.userLogged) {

		let userLoggeds = await users.findByPk( req.session.userLogged.Id,{include: [{model:categories}, {model:imagesusers}]
		})
		return res.render("users/myProfile", {users: userLoggeds})
	}
	next();
	}
	
module.exports = guestMiddleware;


// if (req.session.userLogged) {
// 	users.findOne({ where: { Id: req.session.userLogged.Id } },{
// 		include: [{model:categories}, {model:imagesusers}]
// 	})
// 	.then(users => {
// 		return res.json(users)
// 	}
// }