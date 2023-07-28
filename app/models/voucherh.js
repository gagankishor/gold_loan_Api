const { DataTypes } = require('sequelize');
const sequelize = require("../configs/DbConnection");

const Voucherh = sequelize.define('voucherh', {
  ID: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  F_VoucherTypeMaster: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  VoucherNo: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  VoucherDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  IsCheque: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  ChequeNo: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  ChequeAmount: {
    type: DataTypes.DECIMAL(19, 4),
    allowNull: true,
  },
  ChequeDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Narration: {
    type: DataTypes.TEXT('long'),
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
  UserId: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  F_MemberAccountMaster: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  F_LedgerMasterDr: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  F_LedgerMasterCr: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  Amount: {
    type: DataTypes.DECIMAL(19, 4),
    allowNull: true,
  },
  MemberAccountNo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  F_BranchMaster: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  F_LedgerMasterBank: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  ReceiptNo: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  ReceiptDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  RequestNo: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  IsChequeBookEntry: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  IsChkTransferToSavingAccount: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  F_MemberAccountMaster_Saving: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  IsApproveMaturity: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  CommissionRemarks: {
    type: DataTypes.STRING(1000),
    allowNull: true,
  },
  F_MemberMaster: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  IsReverse: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, {
  tableName: 'voucherh',
  timestamps: false, // If you want timestamps, change this to true
  // Other model options if needed
});

module.exports = Voucherh;
