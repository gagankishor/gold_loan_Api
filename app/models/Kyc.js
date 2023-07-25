const { default: DbConnection, query } = require("../configs/DbConnection");

const table = "kycupdate";

const save = async (data) => {
    // data.is_exists = "Y";
  
    await DbConnection.query("INSERT INTO `" + table + "` SET ?", [data]);
    // const values = [add_name, email, phone, password];
    // return true;)
  };

const getdata =async() =>{
    console.log("kyc Data Feached")
    return await DbConnection.query("SELECT * FROM `" + table + "`")
};
const getonedata =async(id) =>{
    console.log("kyc one Data Feached")
     
    let data = await DbConnection.query("SELECT * FROM `" + table + "` where `idkycupdate`= " + id)
    return data[0]
};
const updatedata =async(data,id) =>{
    
    
    
    await DbConnection.query(`UPDATE ` + table + ` SET ?  WHERE idkycupdate = ${id}`, [data])
    console.log(" Data Updated")
    // console.log("kyc one Data Feached")
}    



exports.default = {
    
    save,
    getdata,
    getonedata,
    updatedata
    
};