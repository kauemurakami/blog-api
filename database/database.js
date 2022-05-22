const { Sequelize } = require('sequelize')
// dbname userdb passdb
const connection = new Sequelize('blog-api', 'postgres', 'root',{
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
} )

module.exports = connection