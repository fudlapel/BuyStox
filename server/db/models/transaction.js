const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  stock: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  tradeType: {
    type: Sequelize.ENUM('bought', 'sold'),
    allowNull: false
  }
})

module.exports = Transaction
