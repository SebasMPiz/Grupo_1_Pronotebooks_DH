module.exports = (sequelize, dataTypes) => {

    let alias = "cart_products";

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
     tableName: "cart_products",
     timestamp: false
 };

 const Cart_Products = sequelize.define (alias, cols, config);

 return Cart_Products
}