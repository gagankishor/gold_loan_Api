const { default: DbConnection, query } = require("../configs/DbConnection");

const table = "goldloan";

const save = async (data) => {
      
    await DbConnection.query("INSERT INTO `" + table + "` SET ?", [data]);
    
  };

const getdata =async() =>{
    console.log("Data Feached")
    return await DbConnection.query("SELECT * FROM `" + table + "`")
};
const getonedata =async(id) =>{
    console.log("kyc one Data Feached")
     
    let data = await DbConnection.query("SELECT * FROM `" + table + "` where `id`= " + id)
    return data[0]
};
const updatedata =async(data,id) =>{
    
    
    
    await DbConnection.query(`UPDATE ` + table + ` SET ?  WHERE id = ${id}`, [data])
    console.log(" Data Updated")
    // console.log("kyc one Data Feached")
};

exports.default = {
    
    save,
    getdata,
    getonedata,
    updatedata
    
};