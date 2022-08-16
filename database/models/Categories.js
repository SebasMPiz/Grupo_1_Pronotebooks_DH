module.exports = (sequelize, dataTypes) => {

    let alias = "categories";

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
     tableName: "categories",
     timestamp: false
 };

 const Categories = sequelize.define (alias, cols, config);

// Categories.associate = function (models){    
//     Categories.hasMany(models.Users,{
//         as: "Users",
//         foreingKey: "id_category",
//         timestamp: false
//     })
// }

 return Categories
}