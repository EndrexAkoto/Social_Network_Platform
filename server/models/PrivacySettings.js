// server/models/PrivacySettings.js
const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const PrivacySettings = sequelize.define('PrivacySettings', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  profileVisibility: {
    type: DataTypes.STRING,
    defaultValue: 'public',
  },
  searchVisibility: {
    type: DataTypes.STRING,
    defaultValue: 'public',
  },
})

module.exports = PrivacySettings
