const { default: Goldloan } = require("../models/Goldloan");

const store = async (req, res) => {
  console.log("body", req.body);

  // await Kyc.save(req.body);
  await Goldloan.save(req.body)

  res.send({ msg: "data inserted" });
};
const index = async (req, res) => {
  // console.log("body", req.body);

  let data =await Goldloan.getdata();

  res.send(data);
};
const onedata = async (req, res) => {
  // console.log("body", req.body);
  const id = req.params.id;
  let data =await Goldloan.getonedata(id);

  res.send(data);
};
const update = async (req, res) => {
  // console.log("body", req.body);
  console.log(req.body)
  console.log(req.params.id)
  const id = req.params.id;
  const data = req.body;
  await Goldloan.updatedata(data,id)

  res.send({ msg: "data updated" });
};

exports.default = {
    index,
    store,
    onedata,
    update
}