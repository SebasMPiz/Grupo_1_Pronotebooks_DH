module.exports = {
  "development": {
    "username": "root",
    "password": "",
    "database": "pronotebooks",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3306",
    "define": {
      "timestamps": false
  }

  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
