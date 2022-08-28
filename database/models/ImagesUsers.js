module.exports = (sequelize, dataTypes) => {

    let alias = "imagesusers";

    let cols =  {
        Id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        profileImage: {
            type: dataTypes.STRING,
        },

        };
        
    let config = {
        tableName: "imagesusers",
        timestamp: false
    };


 const imagesusers = sequelize.define (alias, cols, config);

//     ImagesUsers.associate = function (models){    
//         ImagesUsers.belongsTo(models.Users,{
//             as: "User",
//             foreingKey: "id_imageUsers",
//             timestamp: false
//         })
//     }

 return imagesusers
}