const { DataTypes } = require('sequelize');
const sequelize = require("../configs/DbConnection");

exports.KycUpdate = sequelize.define('kycupdate', {
  idkycupdate: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  fname: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  adhar: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  pan: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  bankname: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  bankacn: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  bankifse: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  uphoto: {
    type: DataTypes.TEXT('long'),
  },
  uadhar: {
    type: DataTypes.TEXT('long'),
  },
  upan: {
    type: DataTypes.TEXT('long'),
  },
  dob: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  grossincom: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Address: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'kycupdate',
  timestamps: false, // If you want timestamps, change this to true
  // Other model options if needed
});

