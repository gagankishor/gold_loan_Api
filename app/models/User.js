const { default: DbConnection, query } = require("../configs/DbConnection");

const table = "alluser";

const save = async (data) => {
    // data.is_exists = "Y";
  
    await DbConnection.query("INSERT INTO `" + table + "` SET ?", [data]);
    // const values = [add_name, email, phone, password];
    // return true;)
  };
exports.default = {
    
    save,
    
};