module.exports = (sequelize, dataTypes) => {

    let alias = "Cart_Products";

    let cols =  {
        id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        id_Cart: {
            type: dataTypes.INTEGER,
        },
        id_Product: {
            type: dataTypes.INTEGER,
        },
        };
        
    let config = {
        tableName: "Cart_Products",
        timestamp: false
    };
    
    const Cart_Products = sequelize.define (alias, cols, config);

return Cart_Products;
}