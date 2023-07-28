const { DataTypes } = require('sequelize');
const sequelize = require("../configs/DbConnection");
const State = require('./state');
const City = sequelize.define('city', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  state_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'city',
  timestamps: false, // If you want timestamps, change this to true
  // Other model options if needed
});

// Define the foreign key relationship with the 'state' table
City.belongsTo(State, {
  foreignKey: 'state_id',
});

module.exports = City;

// const { default: DbConnection, query } = require("../configs/DbConnection");

// const table1 = "state";
// const table2 = "city";


// const statesave = async (data) => {
      
//     await DbConnection.query("INSERT INTO `" + table1 + "` SET ?", [data]);
    
//   };

// const stategetdata =async() =>{
//     console.log("Data Feached")
//     return await DbConnection.query("SELECT * FROM `" + table1 + "`")
// } 
// const citysave = async (data) => {
      
//     await DbConnection.query("INSERT INTO `" + table2 + "` SET ?", [data]);
    
//   };

// const citygetdata =async() =>{
//     console.log("Data Feached")
//     return await DbConnection.query("SELECT * FROM `" + table2 + "`")
// } 

// exports.default = {
//     statesave,
//     stategetdata,
//     citysave,
//     citygetdata
    
// };