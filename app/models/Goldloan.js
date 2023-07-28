const { DataTypes } = require('sequelize');
const sequelize = require("../configs/DbConnection");

 exports.GoldLoan = sequelize.define('goldloan', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Aadhar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Member: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AccountNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SchemeName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  OpeningDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Period: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Maturity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  InterestType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LoanAmount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  MaturityAmount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EMIAmount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FirstEMIDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Guarantor1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Guarantor2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  processingcharge: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  formprice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  servicecharge: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  itemtotalwt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  itemdetail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  itemvalue: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Caret: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  itemquantity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  roi: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fileInput1: {
    type: DataTypes.TEXT('long'),
  },
  F_Member: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'goldloan',
  timestamps: false, // If you want timestamps, change this to true
  // Other model options if needed
});

