const { DataTypes } = require('sequelize');
const sequelize = require("../configs/DbConnection");

const VoucherTypeMaster = sequelize.define('vouchertypemaster', {
  ID: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  DateOfCreation: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  LastUpdateOn: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  UserID: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
  },
  Alias: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'vouchertypemaster',
  timestamps: false, // If you want timestamps, change this to true
  // Other model options if needed
});

module.exports = VoucherTypeMaster;
