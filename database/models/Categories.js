module.exports = (sequelize, dataTypes) => {

    let alias = "Categories";

    let cols =  {
        id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING,
        },
        };
        
    let config = {
        tableName: "Categories",
        timestamp: false
    };
    
    const Categories = sequelize.define (alias, cols, config);

    Categories.associate = function (models){    
        Categories.hasMany(models.Users,{
            as: "Users",
            foreingKey: "id_category"
        })
    }

return Categories;
}