const { DataTypes } = require('sequelize');
const sequelize = require("../configs/DbConnection");

const State = sequelize.define('state', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  // Add other columns for the 'state' table as needed
}, {
  tableName: 'state',
  timestamps: false, // If you want timestamps, change this to true
  // Other model options if needed
});

module.exports = State;
