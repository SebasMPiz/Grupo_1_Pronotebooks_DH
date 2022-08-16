module.exports = (sequelize, dataTypes) => {

    let alias = "cart";

    let cols =  {
        id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        id_Users: {
            type: dataTypes.INTEGER,
        },
        quantity: {
            type: dataTypes.INTEGER,
        },
        };
        
    let config = {
        tableName: "cart",
        timestamp: false
    };


 const Cart = sequelize.define (alias, cols, config);

//     Cart.associate = function (models){    
//         Cart.belongsTo(models.Users,{
//             as: "User",
//             foreingKey: "id_Users",
//             timestamp: false
//         })
//     }

//     Cart.associate = function (models){    
//         Cart.belongsToMany(models.Products,{
//             as: "Products",
//             through: "Cart_Products",
//             foreingKey: "id_Cart",
//             otherKey: "id_Product",
//             timestamp: false
//         })
//     }


 return Cart
}