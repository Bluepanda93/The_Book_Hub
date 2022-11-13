require('dotenv').config()
module.exports = {
  development: {
    database: 'database_development',
    dialect: 'postgres'
  },
  test: {
    database: 'database_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 2c317c3f2c54ec528c5b84af2c83f2ad6b6fd041
