module.exports = (sequelize, dataTypes) => {

    let alias = "ImagesUsers";

    let cols =  {
        id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        profileImage: {
            type: dataTypes.STRING,
        },

        };
        
    let config = {
        tableName: "ImagesUsers",
        timestamp: false
    };
    
    const ImagesUsers = sequelize.define (alias, cols, config);

    ImagesUsers.associate = function (models){    
        ImagesUsers.belongsTo(models.Users,{
            as: "User",
            foreingKey: "id_imageUsers"
        })
    }

return ImagesUsers;
}