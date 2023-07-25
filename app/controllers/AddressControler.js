const { default: Address } = require("../models/Address");

const statestore = async (req, res) => {
    console.log("body", req.body);
  
    // await Kyc.save(req.body);
    await Address.statesave(req.body)
  
    res.send({ msg: "data inserted" });
  };
  const stateindex = async (req, res) => {
    // console.log("body", req.body);
  
    let data =await Address.stategetdata();
  
    res.send(data);
  };

 
  const citystore = async (req, res) => {
    console.log("body", req.body);
  
    // await Kyc.save(req.body);
    await Address.citysave(req.body)
  
    res.send({ msg: "data inserted" });
  };
  const cityindex = async (req, res) => {
    // console.log("body", req.body);
  
    let data =await Address.citygetdata();
  
    res.send(data);
  };
  exports.default = {
    cityindex,
    citystore,
    stateindex,
    statestore
}