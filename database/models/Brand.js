module.exports = (sequelize, dataTypes) => {

    let alias = "Brand";

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
        tableName: "Brand",
        timestamp: false
    };
    
    const Brand = sequelize.define (alias, cols, config);

    Brand.associate = function (models){    
        Brand.hasMany(models.Products,{
            as: "Products",
            foreingKey: "id_brand"
        })
    }

return Brand;
}