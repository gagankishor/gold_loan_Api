const { default: DbConnection, query } = require("../configs/DbConnection");

const table1 = "state";
const table2 = "city";


const statesave = async (data) => {
      
    await DbConnection.query("INSERT INTO `" + table1 + "` SET ?", [data]);
    
  };

const stategetdata =async() =>{
    console.log("Data Feached")
    return await DbConnection.query("SELECT * FROM `" + table1 + "`")
} 
const citysave = async (data) => {
      
    await DbConnection.query("INSERT INTO `" + table2 + "` SET ?", [data]);
    
  };

const citygetdata =async() =>{
    console.log("Data Feached")
    return await DbConnection.query("SELECT * FROM `" + table2 + "`")
} 

exports.default = {
    statesave,
    stategetdata,
    citysave,
    citygetdata
    
};