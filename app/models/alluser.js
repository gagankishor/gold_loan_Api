const { DataTypes } = require('sequelize');
const sequelize = require("../configs/DbConnection");

const AllUser = sequelize.define('alluser', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  add_name: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'alluser',
  timestamps: false, // If you want timestamps, change this to true
  // Other model options if needed
});

module.exports = AllUser;
