module.exports = (sequelize, dataTypes) => {

    let alias = "imagesproducts";

    let cols =  {
        id: {
            autoIncremental: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        bannerImage: {
            type: dataTypes.STRING,
        },
        mainImage: {
            type: dataTypes.STRING,
        },
        image2: {
            type: dataTypes.STRING,
        },
        image3: {
            type: dataTypes.STRING,
        },
        image4: {
            type: dataTypes.STRING,
        },

        };
        
    let config = {
        tableName: "imagesproducts",
        timestamp: false
    };


  const ImagesProducts = sequelize.define (alias, cols, config);

// ImagesProducts.associate = function (models){    
//     ImagesProducts.belongsTo(models.Products,{
//         as: "Product",
//         foreingKey: "id_imagesProducts",
//         timestamp: false
//     })
// }

 return ImagesProducts
}