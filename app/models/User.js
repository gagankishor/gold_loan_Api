const { DataTypes } = require('sequelize');
const sequelize = require("../configs/DbConnection");
 exports.User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: false, // If you want timestamps, change this to true
  // Other model options if needed
});

// module.exports = User;
