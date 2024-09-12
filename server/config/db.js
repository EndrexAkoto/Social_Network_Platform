const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('social_network_db', 'root', 'Akoto@2015', {
  host: 'localhost',
  dialect: 'mysql',
})

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

module.exports = sequelize
