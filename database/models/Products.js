module.exports = (sequelize, dataTypes) => {

    let alias = "Products";

    let cols =  {
        id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.DECIMAL,
        },
        soldQuantity: {
            type: dataTypes.INTEGER,
        },
        processor: {
            type: dataTypes.STRING,                                    
        },
        graphics: {
            type: dataTypes.STRING,                                          
        },
        memory: {
            type: dataTypes.STRING                                            
        },
        expansionSlot: {
            type: dataTypes.STRING                                            
        },
        storage: {
            type: dataTypes.STRING                                            
        },
        operativeSystem: {
            type: dataTypes.STRING                                            
        },
        screenSize: {
            type: dataTypes.INTEGER
        },
        computerCategory: {
            type: dataTypes.STRING                                            
        },
        color: {
            type: dataTypes.STRING                                            
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING                                            
        },
        id_imageProducts: {
            type: dataTypes.INTEGER
        },
        id_brand: {
            type: dataTypes.INTEGER
        },

        };
        
    let config = {
        tableName: "Products",
        timestamp: false
    };
    
    const Products = sequelize.define (alias, cols, config);

    Products.associate = function (models){    
        Products.belongsToMany(models.Cart,{
            as: "Cart",
            through: "Cart_Products",
            foreingKey: "id_Product",
            otherKey: "id_Cart",
            timestamp: false
        })
    }

    Products.associate = function (models){    
        Products.belongsTo(models.Brand,{
            as: "Brand",
            foreingKey: "id_brand"
        })
    }

    Products.associate = function (models){    
        Products.hasMany(models.ImagesProducts,{
            as: "ImagesProducts",
            foreingKey: "id_ImagesProducts"
        })
    }

return Products;
}  