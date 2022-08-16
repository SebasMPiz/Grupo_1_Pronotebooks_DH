module.exports = (sequelize, dataTypes) => {

    let alias = "brand";

    let cols =  {
        id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        brand: {
            type: dataTypes.STRING,
        },
        serie: {
            type: dataTypes.STRING,
        },
        model: {
            type: dataTypes.STRING,
        },
        };

let config = {
        tableName: "brand",
         timestamp: false
    };
    
     const Brand = sequelize.define (alias, cols, config);

//     // Brand.associate = function (models){    
//     //     Brand.hasMany(models.Products,{
//     //         as: "Brand",
//     //         //foreingKey: "id_brand",
//     //         timestamp: false
//     //     })
//     // }

return Brand
}