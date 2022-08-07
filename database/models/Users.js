module.exports = (sequelize, dataTypes) => {

    let alias = "Users";

    let cols =  {
        id: {
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
        id_imagesUsers: {
            type: dataTypes.INTEGER                                            
        } 
        };
        
    let config = {
        tableName: "Users",
        timestamp: false
    };
    
    const Users = sequelize.define (alias, cols, config);

    Users.associate = function (models){    
        Users.belongsTo(models.ImagesUsers,{
            as: "imageUsers",
            foreingKey: "id_imageUsers"
        })
    }

    Users.associate = function (models){    
        Users.belongsTo(models.Categories,{
            as: "Categories",
            foreingKey: "id_category"
        })
    }

    Users.associate = function (models){    
        Users.belongsTo(models.Cart,{
            as: "Cart",
            foreingKey: "id_Users"
        })
    }

return Users;
}   