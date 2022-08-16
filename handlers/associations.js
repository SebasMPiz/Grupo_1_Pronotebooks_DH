module.exports = function( db ) {

    db[ 'brand' ].hasMany( db[ 'products' ], {
        foreignKey: 'id_brand',
    });

    db[ 'products' ].belongsTo( db[ 'brand' ], {
        foreignKey: 'id_brand',
    });

    db[ 'products' ].belongsTo( db[ 'imagesproducts' ],{
        foreignKey: 'id_imagesproducts'
    });

    db[ 'cart_products' ].hasMany( db[ 'products' ], {
        foreignKey: 'id_product'
    });

    db[ 'cart_products' ].belongsTo( db[ 'cart' ], {
        foreignKey: 'id_cart'
    });

    db[ 'cart' ].belongsTo( db[ 'users' ], {
        foreignKey: 'id_Users'
    });

    db[ 'users' ].belongsTo( db[ 'categories' ], {
        foreignKey: 'id_category'
    });

    db[ 'users' ].hasMany( db[ 'imagesusers' ], {
        foreignKey: 'id_imagesusers'
    });
   
    return db;

}