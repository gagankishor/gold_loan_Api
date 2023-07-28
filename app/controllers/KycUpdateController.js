const { KycUpdate } = require("../models/Kyc");
const store = async (req, res) => {
  try {
    console.log("body", req.body);
    await KycUpdate.create(req.body);
    res.send({ msg: "data inserted" });
  } catch (error) {
    console.error('Error storing Kyc data:', error);
    res.status(500).send({ error: 'An error occurred while storing Kyc data.' });
  }
};

const index = async (req, res) => {
  try {
    const data = await KycUpdate.findAll();
    res.send(data);
  } catch (error) {
    console.error('Error fetching Kyc data:', error);
    res.status(500).send({ error: 'An error occurred while fetching Kyc data.' });
  }
};

const onedata = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await KycUpdate.findByPk(id);
    res.send(data);
  } catch (error) {
    console.error('Error fetching Kyc data:', error);
    res.status(500).send({ error: 'An error occurred while fetching Kyc data.' });
  }
};

const update = async (req, res) => {
  try {
    const idkycupdate
    = req.params.id;
    const data = req.body;
    console.log(idkycupdate
      )
    await KycUpdate.update(data, { where: { idkycupdate } });
    res.send({ msg: "data updated" });
  } catch (error) {
    console.error('Error updating Kyc data:', error);
    res.status(500).send({ error: 'An error occurred while updating Kyc data.' });
  }
};

exports.default = {
  index,
  store,
  onedata,
  update
};
