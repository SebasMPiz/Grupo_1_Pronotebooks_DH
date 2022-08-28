module.exports = (sequelize, dataTypes) => {

    let alias = "users";

    let cols =  {
        Id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING,
        },
        last_name: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,                                    
        },
        phone: {
            type: dataTypes.INTEGER                                            
        },
        country: {
            type: dataTypes.STRING                                            
        },
        id_category: {
            type: dataTypes.INTEGER                                            
        },
        id_imageUsers: {
            type: dataTypes.INTEGER                                            
        } 
        };
 

let config = {
    tableName: "users",
    timestamp: false
};

 const users = sequelize.define (alias, cols, config);

// Users.associate = function (models){    
//     Users.belongsTo(models.ImagesUsers,{
//         as: "imageUsers",
//         foreingKey: "id_imageUsers",
//         timestamp: false
//     })
// }

// Users.associate = function (models){    
//     Users.belongsTo(models.Categories,{
//         as: "Categories",
//         foreingKey: "id_category",
//         timestamp: false
//     })
// }

// Users.associate = function (models){    
//     Users.belongsTo(models.Cart,{
//         as: "Cart",
//         foreingKey: "id_Users",
//         timestamp: false
//     })
// }

    return users
}