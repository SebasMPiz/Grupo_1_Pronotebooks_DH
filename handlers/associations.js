module.exports = function( db ) {

    db[ 'brand' ].hasOne( db[ 'products' ], {
        foreignKey: 'id_brand',
    });
    db[ 'products' ].belongsTo( db[ 'brand' ], {
        foreignKey: 'id_brand',
    });


    db[ 'imagesproducts' ].hasMany( db[ 'products' ], {
        foreignKey: 'id_imageProducts'
    });
    db[ 'products' ].belongsTo( db[ 'imagesproducts' ],{
        foreignKey: 'id_imageProducts'
    });


    db[ 'categories' ].hasMany( db[ 'users' ], {
        foreignKey: 'id_category'
    });
    db[ 'users' ].belongsTo( db[ 'categories' ], {
        foreignKey: 'id_category'
    });


    db[ 'imagesusers' ].hasOne( db[ 'users' ], {
        foreignKey: 'id_imageUsers'
    });
    db[ 'users' ].belongsTo( db[ 'imagesusers' ], {
        foreignKey: 'id_imageUsers'
    });
    

    db[ 'users' ].hasOne( db[ 'cart' ], {
        foreignKey: 'id_Users'
    });
     db[ 'cart' ].belongsTo( db[ 'users' ], {
        foreignKey: 'id_Users'
    });
   
    return db;

}